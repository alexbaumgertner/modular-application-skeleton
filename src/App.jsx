import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
            <header className="App__header">Proof of concept</header>
            <menu className="menu">
              <ul className="menu-list">
                <li className="menu-list__item">
                  <Link to="/">Main</Link>
                </li>
                <li className="menu-list__item">
                  <Link to="/catalog">Catalog</Link>
                </li>
                <li className="menu-list__item">
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li className="menu-list__item">
                  <Link to="/favorites">Favorites</Link>
                </li>
                <li className="menu-list__item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="menu-list__item">
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </menu>
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
