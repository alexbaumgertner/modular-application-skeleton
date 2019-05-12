import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Reducers } from '../Containers'

const rootReducer = combineReducers(Reducers)

const configureStore = preloadedState => {
  /** @see https://redux.js.org/api/createstore */
  const store = createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}

export default configureStore
