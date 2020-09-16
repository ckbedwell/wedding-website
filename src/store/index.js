import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { componentsReducer } from './components-slice'
import { pulloutReducer } from './pullout-slice'
import { databaseReducer } from './database-slice'
import { userReducer } from './user-slice'

export const store = configureStore({
  reducer: combineReducers({
    components: componentsReducer,
    pullout: pulloutReducer,
    database: databaseReducer,
    user: userReducer,
  }),
  middleware: getDefaultMiddleware({
    // enable for debugging
    immutableCheck: false,
    // serializableCheck: false,
  }),
})
