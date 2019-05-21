const FETCH_CATALOG_START = '@catalog/FETCH_CATALOG_START'
const FETCH_CATALOG_SUCCESS = '@catalog/FETCH_CATALOG_SUCCESS'
const FETCH_CATALOG_ERROR = '@catalog/FETCH_CATALOG_ERROR'

const fetchCatalog = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CATALOG_START,
    })

    fetch('http://localhost:3333/catalog')
      .then(result => result.json())
      .then(catalog => dispatch({
        type: FETCH_CATALOG_SUCCESS,
        catalog,
      }))
      .catch(error => dispatch({
        type: FETCH_CATALOG_ERROR,
        error,
      }))
  }
}

const initialState = {
  data: [],
  ui: {
    state: 'init',
    error: null,
  },
}

/**
 * @see https://redux.js.org/basics/reducers#handling-actions
 * @param {Object} state Часть общего состояния для catalog (store.getState().catalog)
 */
const catalogContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_START:
      state = {
        data: [],
        ui: {
          state: 'loading',
          error: null,
        },
      }
      return state
    case FETCH_CATALOG_SUCCESS:
      state = {
        data: action.catalog,
        ui: {
          state: 'loaded',
          error: null,
        },
      }
      return state
    case FETCH_CATALOG_ERROR:
      state = {
        ui: {
          state: 'error-loading',
          error: action.error,
        },
      }
      return state
    default:
      return state
  }
}

const actions = {
  fetchCatalog,
}

export {
  catalogContainerReducer as default,
  actions,
}
