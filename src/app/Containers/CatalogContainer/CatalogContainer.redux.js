const FETCH_CATALOG_START = '@catalog/FETCH_CATALOG_START'
const FETCH_CATALOG_SUCCESS = '@catalog/FETCH_CATALOG_SUCCESS'
const FETCH_CATALOG_ERROR = '@catalog/FETCH_CATALOG_ERROR'

const UPDATE_ITEM_START = '@catalog/UPDATE_ITEM_START'
const UPDATE_ITEM_SUCCESS = '@catalog/UPDATE_ITEM_SUCCESS'
const UPDATE_ITEM_ERROR = '@catalog/UPDATE_ITEM_ERROR'

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

const updateCatalogItem = (values) => {
  return dispatch => {
    dispatch({
      type: UPDATE_ITEM_START,
    })

    fetch(`http://localhost:3333/catalog/${values.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then(result => result.json())
      .then(item => dispatch({
        type: UPDATE_ITEM_SUCCESS,
        item,
      }))
      .catch(error => dispatch({
        type: UPDATE_ITEM_ERROR,
        error,
      }))
  }
}

const initialState = {
  data: [],
  /** @see  https://github.com/reduxjs/redux/issues/595
   * conventions / recommendations for UI state
   */
  ui: {
    state: 'init',
    error: null,
  },
}

/**
 * @see https://redux.js.org/basics/reducers#handling-actions
 * @param {Object} state Часть общего состояния для catalog (store.getState().catalog)
 * @param {Object} action
 */
const catalogContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_START:
      state = {
        data: [],
        ui: {
          state: 'START',
          error: null,
        },
      }
      return state
    case FETCH_CATALOG_SUCCESS:
      state = {
        data: action.catalog,
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case FETCH_CATALOG_ERROR:
      state = {
        ui: {
          state: 'ERROR',
          error: action.error,
        },
      }
      return state
    case UPDATE_ITEM_START:
      state = {
        ...state,
        ui: {
          state: 'START',
          error: null,
        },
      }
      return state
    case UPDATE_ITEM_SUCCESS:
      state = {
        /** @see https://devdocs.io/javascript/global_objects/array/map */
        data: state.data.map(item => {
          if (item.id !== action.item.id) return item
          return { ...item, ...action.item  }
        }),
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case UPDATE_ITEM_ERROR:
      state = {
        ...state,
        ui: {
          state: 'ERROR',
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
  updateCatalogItem,
}

export {
  catalogContainerReducer as default,
  actions,
}
