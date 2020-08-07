import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'envs/APP_ENV' // imports different file depending on webpack cli env.APP_ENV
import { getIcons, sentrySetup } from 'init'
import App from './app'
import { store } from 'store'

import 'css/normalize.css'

const JSX = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

sentrySetup()
getIcons()

ReactDOM.render(JSX(), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
