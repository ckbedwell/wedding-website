import { hot } from 'react-hot-loader/root'
import React from 'react'
import classNames from 'classnames'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { connect } from 'store/database-slice'
import { Header } from 'components/header'
import { Confetti } from 'components/confetti'
import { Pullout } from 'components/pullout'
import { Home } from 'pages/home'
import { pageMap } from 'pages'

import styles from './app.css'
import navigation from 'data/navigation.json'

const App = () => {
  const open = useSelector(state => state.pullout.open)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(connect())
  }, [])

  return (
    <BrowserRouter>
      <div
        className={classNames(styles.container, {
          [styles.pulloutOpen]: open,
        })}
      >
        <div>
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
        </div>
        <Pullout />
      </div>
    </BrowserRouter>
  )
}

export default hot(App)
