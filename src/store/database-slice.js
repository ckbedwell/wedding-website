import { createSlice } from '@reduxjs/toolkit'
import { Database } from 'database/database'

const collection = `guests`
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

function getGuest(id) {
  return function(dispatch, getState) {
    const idToUse = id || getKey()

    if (idToUse) {
      const docId = getDocId(idToUse)
      dispatch(updateLoading(true))

      getState().database.database.get(collection, docId)
        .then(data => {
          if (data) {
            dispatch(setDocId(docId))
            dispatch(update(data))
            storeKey(idToUse)
          } else {
            window.localStorage.removeItem(storageKey)
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
