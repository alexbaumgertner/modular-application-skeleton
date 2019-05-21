const prefix = '@catalog/'

const READ_ALL_START = `${prefix}READ_ALL_START`
const READ_ALL_SUCCESS = `${prefix}READ_ALL_SUCCESS`
const READ_ALL_ERROR = `${prefix}READ_ALL_ERROR`

/**
 * CRUD operations
 * @see https://wikipedia.org/wiki/CRUD
 */
const CREATE_ITEM_START = `${prefix}CREATE_ITEM_START`
const CREATE_ITEM_SUCCESS = `${prefix}CREATE_ITEM_SUCCESS`
const CREATE_ITEM_ERROR = `${prefix}CREATE_ITEM_ERROR`

const READ_ITEM_START = `${prefix}/READ_ITEM_START`
const READ_ITEM_SUCCESS = `${prefix}/READ_ITEM_SUCCESS`
const READ_ITEM_ERROR = `${prefix}/READ_ITEM_ERROR`

const UPDATE_ITEM_START = `${prefix}UPDATE_ITEM_START`
const UPDATE_ITEM_SUCCESS = `${prefix}UPDATE_ITEM_SUCCESS`
const UPDATE_ITEM_ERROR = `${prefix}UPDATE_ITEM_ERROR`

const DELETE_ITEM_START = `${prefix}DELETE_ITEM_START`
const DELETE_ITEM_SUCCESS = `${prefix}DELETE_ITEM_SUCCESS`
const DELETE_ITEM_ERROR = `${prefix}DELETE_ITEM_ERROR`

// read all
const getCatalog = () => {
  return dispatch => {
    dispatch({
      type: READ_ALL_START,
    })

    fetch('http://localhost:3333/catalog')
      .then(result => result.json())
      .then(catalog => dispatch({
        type: READ_ALL_SUCCESS,
        catalog,
      }))
      .catch(error => dispatch({
        type: READ_ALL_ERROR,
        error,
      }))
  }
}

// create
const saveCatalogItem = (values) => {
  return dispatch => {
    dispatch({
      type: CREATE_ITEM_START,
    })

    return fetch(`http://localhost:3333/catalog/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then(result => result.json())
      .then(item => dispatch({
        type: CREATE_ITEM_SUCCESS,
        item,
      }))
      .catch(error => dispatch({
        type: CREATE_ITEM_ERROR,
        error,
      }))
  }
}

// read
const getCatalogItem = (itemId) => {
  return dispatch => {
    dispatch({
      type: READ_ITEM_START,
    })

    return fetch(`http://localhost:3333/catalog/${itemId}`)
      .then(result => result.json())
      .then(item => dispatch({
        type: READ_ITEM_SUCCESS,
        item,
      }))
      .catch(error => dispatch({
        type: READ_ITEM_ERROR,
        error,
      }))
  }
}

// update
const updateCatalogItem = (values) => {
  return dispatch => {
    dispatch({
      type: UPDATE_ITEM_START,
    })

    return fetch(`http://localhost:3333/catalog/${values.id}`,
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

// delete
const deleteCatalogItem = itemId => {}

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
    case READ_ALL_START:
      state = {
        data: [],
        ui: {
          state: 'START',
          error: null,
        },
      }
      return state
    case READ_ALL_SUCCESS:
      state = {
        data: action.catalog,
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case READ_ALL_ERROR:
      state = {
        ui: {
          state: 'ERROR',
          error: action.error,
        },
      }
      return state
    case CREATE_ITEM_START:
      state = {
        ...state,
        ui: {
          state: 'START',
          error: null,
        },
      }
      return state
    case CREATE_ITEM_SUCCESS:
      state = {
        data: [...state.data, action.item],
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case CREATE_ITEM_ERROR:
      state = {
        ...state,
        ui: {
          state: 'ERROR',
          error: action.error,
        },
      }
      return state
    case READ_ITEM_START:
      state = {
        ...state,
        ui: {
          state: 'START',
          error: null,
        },
      }
      return state
    case READ_ITEM_SUCCESS:
      state = {
        /** @see https://devdocs.io/javascript/global_objects/array/map */
        data: state.data.length > 0 ?
          state.data.map(item => {
            if (item.id !== action.item.id) return item
            return { ...item, ...action.item }
          }) :
          [action.item],
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case READ_ITEM_ERROR:
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
          return { ...item, ...action.item }
        }),
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case UPDATE_ITEM_ERROR:
      state = {
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
  fetchCatalog: getCatalog,
  saveCatalogItem,
  getCatalogItem,
  updateCatalogItem,
  deleteCatalogItem,
}

export {
  catalogContainerReducer as default,
  actions,
}
