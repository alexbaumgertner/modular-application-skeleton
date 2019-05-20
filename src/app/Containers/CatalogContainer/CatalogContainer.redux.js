const FETCH_CATALOG = '@catalog/FETCH_CATALOG_ITEMS'

const fetchCatalog = () => {
  return {
    type: FETCH_CATALOG,
  }
}

const initialState = []

/**
 * @see https://redux.js.org/basics/reducers#handling-actions
 * @param state
 * @param action
 * @returns {Array}
 */
const catalogContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG: {
      return state
    }
    default:
      return state
  }
}


export default catalogContainerReducer
