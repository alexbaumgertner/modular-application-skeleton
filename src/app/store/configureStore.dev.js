import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  /** @see https://redux.js.org/api/createstore */
  const store = createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  if (module.hot) {
    /** Enable Webpack hot module replacement for reducers
     * @see https://webpack.js.org/guides/hot-module-replacement/
     */
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
