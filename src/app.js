import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Header } from 'components/header'
import { Confetti } from 'components/confetti'
import { Pullout } from 'components/pullout'
import { Scaffold } from 'components/scaffold'
import { Home } from 'pages/home'
import { pageMap } from 'pages'
import { SiteMessage } from 'components/site-message'

import navigation from 'data/navigation.json'

const App = () => {
  const error = useSelector(state => state.database.error)

  return (
    <BrowserRouter>
      <Scaffold>
        <div>
          <Header />
          <Switch>
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
            <Route
              component={Home}
              path={`/`}
            />
          </Switch>
          <Confetti />
          {error &&
            <SiteMessage>
              {error}
            </SiteMessage>
          }
        </div>
        <Pullout />
      </Scaffold>
    </BrowserRouter>
  )
}

export default hot(App)
