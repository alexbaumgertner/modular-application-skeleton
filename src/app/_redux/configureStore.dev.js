import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../Containers/rootReducer'
import mySaga from '../Containers/sagas'

/**
 * @see https://redux-saga.js.org/#getting-started
 * @type {SagaMiddleware<object>}
 */
const sagaMiddleware = createSagaMiddleware()

/**
 * @see https://redux-starter-kit.js.org/api/configurestore#configurestore
 * @param preloadedState
 * @returns {EnhancedStore<any, AnyAction>}
 */
const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: {
      // __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      // Specify extension’s options like
      // name,
      // actionsBlacklist,
      // actionsCreators,
      // serialize...
    },
    preloadedState,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../Containers/rootReducer', () => store.replaceReducer(rootReducer))
  }

  sagaMiddleware.run(mySaga)

  return store
}

export default configureAppStore
