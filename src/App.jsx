import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { Provider } from 'react-redux'

import {
  AdminRoute,
  CatalogRoute,
  ContactsRoute,
  ProfileRoute,
  MainRoute,
  FavoritesRoute,
} from './app/Routes'

import configureStore from './app/_redux/configureStore'

import block from './app/utils/classname'
import './App.module.css'

const b = block('app')

const store = configureStore()

/**
 * @see https://react-redux.js.org/api
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={b()}>
            <header className={b('header')}>
              <Menu className={b('menu')}>
                <Menu.Item><Link to="/">Main</Link></Menu.Item>
                <Menu.Item data-test-id="main-menu__item_catalog"><Link to="/catalog">Catalog</Link></Menu.Item>
                <Menu.Item><Link to="/contacts">Contacts</Link></Menu.Item>
                <Menu.Item><Link to="/favorites">Favorites</Link></Menu.Item>
                <Menu.Item><Link to="/profile">Profile</Link></Menu.Item>
                <Menu.Item><Link to="/admin">Admin</Link></Menu.Item>
              </Menu>
            </header>
            <main className={b('main')}>
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
