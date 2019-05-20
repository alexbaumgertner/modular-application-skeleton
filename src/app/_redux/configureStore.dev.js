import { createStore } from 'redux'
import rootReducer from '../Containers/rootReducer'

/* eslint-disable no-underscore-dangle */
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    /** @see http://extension.remotedev.io/#usage */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../../app/Containers/rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
/* eslint-enable */

export default configureStore
