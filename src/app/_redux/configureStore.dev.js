import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Containers/rootReducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like
      // name,
      // actionsBlacklist,
      // actionsCreators,
      // serialize...
    }) : compose;

/* eslint-disable no-underscore-dangle */
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    /** @see http://extension.remotedev.io/#usage */
    composeEnhancers(
      applyMiddleware(thunk)
    ),
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
