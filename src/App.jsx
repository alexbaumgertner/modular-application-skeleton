import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'

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
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App__link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    )
  }
}

export default App
