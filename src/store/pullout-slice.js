import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: `pullout`,
  initialState: {
    open: false,
  },
  reducers: {
    togglePullout(state) {
      state.open = !state.open
    },
    closePullout(state) {
      state.open = false
    },
  },
})

export const { closePullout, togglePullout } = actions
export const pulloutReducer = reducer
