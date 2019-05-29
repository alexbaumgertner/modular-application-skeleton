import { combineReducers } from 'redux'
import catalogContainerReducer from './CatalogContainer/CatalogContainer.redux'
import profileContainerReducer from './ProfileContainer/ProfileContainer.redux'

const rootReducer = combineReducers({
  catalog: catalogContainerReducer,
  profile: profileContainerReducer,
})

export default rootReducer
