import { combineReducers } from 'redux'
import adminReducer from './AdminContainer/AdminContainer.redux'
import catalogContainerReducer from './CatalogContainer/CatalogContainer.redux'
import profileContainerReducer from './ProfileContainer/ProfileContainer.redux'

const rootReducer = combineReducers({
  admin: adminReducer,
  catalog: catalogContainerReducer,
  profile: profileContainerReducer,
})

export default rootReducer
