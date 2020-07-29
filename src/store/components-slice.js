import { createSlice } from '@reduxjs/toolkit'

import { factoryComponents } from 'factory-components/factoryComponents'

const { actions, reducer } = createSlice({
  name: `components`,
  initialState: {
    ...factoryComponents,
  },
  reducers: {
    addComponents(state, { payload }) {
      const { components } = payload

      state = {
        ...state,
        ...components,
      }
    },
  },
})

export const { addComponents } = actions
export const componentsReducer = reducer
