import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { componentsReducer } from './components-slice'

export const store = configureStore({
  reducer: combineReducers({
    components: componentsReducer,
  }),
  middleware: getDefaultMiddleware({
    // enable for debugging
    immutableCheck: false,
    serializableCheck: false,
  }),
})
