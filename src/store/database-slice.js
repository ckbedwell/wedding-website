import { createSlice } from '@reduxjs/toolkit'
import { Database } from 'database/database'

export const GUEST_COLLECTION = `guests`
const storageKey = `docId`

const { actions, reducer } = createSlice({
  name: `database`,
  initialState: {
    loading: undefined,
    database: undefined,
    guestData: undefined,
    docId: undefined,
    error: undefined,
  },
  reducers: {
    updateLoading(state, { payload }) {
      state.loading = payload
    },
    update(state, { payload }) {
      state.guestData = payload
    },
    connect(state) {
      state.database = new Database()
    },
    setDocId(state, { payload }) {
      state.docId = payload
    },
    setError(state, { payload }) {
      state.error = payload
    },
    clearError(state) {
      state.error = undefined
    },
  },
})

export const {
  clearError,
  connect,
  setDocId,
  setError,
  updateLoading,
  update,
} = actions

export function setUp(id) {
  return async function(dispatch) {
    await dispatch(connect())
    dispatch(getGuest(id))
  }
}

export function getGuest(id) {
  return function(dispatch, getState) {
    const { database } = getState().database
    const idToUse = id || getKey()

    if (idToUse) {
      const docId = getDocId(idToUse)
      dispatch(updateLoading(true))

      database.get(GUEST_COLLECTION, docId)
        .then(data => {
          if (data) {
            dispatch(setDocId(docId))
            dispatch(update(data))
            storeKey(idToUse)
            trackVisit(database, docId, data)
          } else {
            window.localStorage.removeItem(storageKey)
            console.warn(storageKey)
            throw new Error(`No data`)
          }
        })
        .catch(e => {
          dispatch(setError(getError(e.message)))
        })
        .finally(() => {
          dispatch(updateLoading(false))
        })
    }
  }
}

function trackVisit(database, docId, data) {
  database.update(GUEST_COLLECTION, docId, {
    ...data,
    visits: [
      ...(data?.visits || []),
      new Date().getTime(),
    ],
  })
}

function getError(error) {
  const errorMap = {
    'No data': `Unable to find your entry in our guest list. Are you sure you followed the link correctly?`,
    generic: `Something went wrong with getting your details.`,
  }

  return errorMap[error] || errorMap.generic
}

function getDocId(encodedString) {
  if (encodedString) {
    try {
      return atob(encodedString)
    } catch(e) {
      console.warn(e)
    }
  }
}

function getKey() {
  return window.localStorage.getItem(storageKey)
}

function storeKey(id) {
  if (id) {
    window.localStorage.setItem(storageKey, id)
  }
}

export const databaseReducer = reducer
