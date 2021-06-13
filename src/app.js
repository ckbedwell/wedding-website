import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Header } from 'components/header'
import { Confetti } from 'components/confetti'
import { Pullout } from 'components/pullout'
import { Scaffold } from 'components/scaffold'
import { Home } from 'pages/home'
import { pageMap } from 'pages'
import { Invite } from 'pages/invite'
import { GuestList } from 'pages/guest-list'
import { EveningGuests } from 'pages/evening-guests'
import { SiteMessage } from 'components/site-message'

import navigation from 'data/navigation.json'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          component={Invite}
          exact
          path={`/invite`}
        />
        <Route
          component={WithHeader}
        />
      </Switch>
    </BrowserRouter>
  )
}

export const WithHeader = () => {
  const error = useSelector(state => state.database.error)

  return (
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
            component={GuestList}
            exact
            path={`/guest-list`}
          />
          <Route
            component={EveningGuests}
            exact
            path={`/evening-guests`}
          />
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
  )
}

export default hot(App)
