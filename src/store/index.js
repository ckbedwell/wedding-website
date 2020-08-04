import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { componentsReducer } from './components-slice'
import { pulloutReducer } from './pullout-slice'

export const store = configureStore({
  reducer: combineReducers({
    components: componentsReducer,
    pullout: pulloutReducer,
  }),
  middleware: getDefaultMiddleware({
    // enable for debugging
    immutableCheck: false,
    serializableCheck: false,
  }),
})
