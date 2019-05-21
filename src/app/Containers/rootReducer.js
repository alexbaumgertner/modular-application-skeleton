import { combineReducers } from 'redux'
import catalogContainerReducer from './CatalogContainer/CatalogContainer.redux'

const rootReducer = combineReducers({
  catalog: catalogContainerReducer,
})

export default rootReducer
