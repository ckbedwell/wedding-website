import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from 'components/header'
import { Confetti } from 'components/confetti'
import { Pullout } from 'components/pullout'
import { Scaffold } from 'components/scaffold'
import { Home } from 'pages/home'
import { pageMap } from 'pages'

import navigation from 'data/navigation.json'

const App = () => {
  return (
    <BrowserRouter>
      <Scaffold>
        <div>
          <Header />
          <Switch>
            <Route
              component={Home}
              exact
              path={`/`}
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
      </Scaffold>
    </BrowserRouter>
  )
}

export default hot(App)
