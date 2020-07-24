import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from 'pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          component={Home}
          path="/"
        />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
