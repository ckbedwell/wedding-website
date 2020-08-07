import { createSlice } from '@reduxjs/toolkit'
import Firebase from 'database/firebase'

const { actions, reducer } = createSlice({
  name: `database`,
  initialState: {
    database: undefined,
  },
  reducers: {
    connect(state) {
      state.database = new Firebase()
    },
  },
})

export const { connect } = actions
export const databaseReducer = reducer
