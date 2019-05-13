import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import configureStore from './app/store/configureStore'
import {
  AdminRoute,
  CatalogRoute,
  ContactsRoute,
  ProfileRoute,
  MainRoute,
  FavoritesRoute,
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
              <Route exact path="/" component={MainRoute} />
              <Route path="/admin" component={AdminRoute} />
              <Route path="/catalog" component={CatalogRoute} />
              <Route path="/contacts" component={ContactsRoute} />
              <Route path="/profile" component={ProfileRoute} />
              <Route path="/favorites" component={FavoritesRoute} />
            </main>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
