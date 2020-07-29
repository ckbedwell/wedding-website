import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'envs/APP_ENV' // imports different file depending on webpack cli env.APP_ENV
import 'init'
import 'css/normalize.css'
import App from './app'
import { store } from 'store'

const JSX = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(JSX(), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
