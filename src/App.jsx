import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import configureStore from './app/store/configureStore'
import {
  Admin,
  Catalog,
  Contacts,
  Profile,
  Main,
  Favorites,
} from './app/Routes'

const store = configureStore()

/**
 * @see https://react-redux.js.org/api
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App__header">
              <Menu className="App__menu">
                <Menu.Item><Link to="/">Main</Link></Menu.Item>
                <Menu.Item><Link to="/catalog">Catalog</Link></Menu.Item>
                <Menu.Item><Link to="/contacts">Contacts</Link></Menu.Item>
                <Menu.Item><Link to="/favorites">Favorites</Link></Menu.Item>
                <Menu.Item><Link to="/profile">Profile</Link></Menu.Item>
                <Menu.Item><Link to="/admin">Admin</Link></Menu.Item>
              </Menu>
            </header>
            <main>
              <Route exact path="/" component={Main} />
              <Route path="/admin" component={Admin} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/profile" component={Profile} />
              <Route path="/favorites" component={Favorites} />
            </main>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
