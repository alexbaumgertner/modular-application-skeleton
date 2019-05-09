import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'
import { Contacts } from './app/Routes'

const store = configureStore()

/**
 * @see https://react-redux.js.org/api
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App__header'>
            Proof of concept
          </header>
          <main>
            <Contacts />
          </main>
        </div>
      </Provider>
    )
  }
}

export default App
