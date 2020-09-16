import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: `user`,
  initialState: {
    confetti: true,
  },
  reducers: {
    toggleConfetti(state) {
      state.confetti = !state.confetti
    },
  },
})

export const { toggleConfetti } = actions
export const userReducer = reducer
