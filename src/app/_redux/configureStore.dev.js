import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from '../Containers/rootReducer'

/**
 * @see https://redux-starter-kit.js.org/api/configurestore#configurestore
 * @param preloadedState
 * @returns {EnhancedStore<any, AnyAction>}
 */
const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
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

  if (module.hot) {
    module.hot.accept('../Containers/rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}

export default configureAppStore
