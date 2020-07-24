import React from 'react'
import ReactDOM from 'react-dom'

import 'envs/APP_ENV' // imports different file depending on webpack cli env.APP_ENV
import 'init'
import 'css/normalize.css'
import App from './app'

const JSX = () => (
  <App />
)

ReactDOM.render(JSX(), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
