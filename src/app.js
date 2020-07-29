import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from 'components/header'
import { Confetti } from 'components/confetti'
import { Home } from 'pages/home'
import { pageMap } from 'pages'
import navigation from 'data/navigation.json'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          component={Home}
          exact
          path="/"
        />
        {navigation.map(({ href }) => {
          return (
            <Route
              component={pageMap[href.slice(1)]}
              exact
              key={href}
              path={href}
            />
          )
        })}
      </Switch>
      <Confetti />
    </BrowserRouter>
  )
}

export default hot(App)
