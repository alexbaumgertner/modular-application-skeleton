import {
  createSlice,
} from 'redux-starter-kit'

const prefix = '@catalog/'

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
const deleteCatalogItem = itemId => {
  return dispatch => {
    dispatch({
      type: DELETE_ITEM_START,
    })

    return fetch(`http://localhost:3333/catalog/${itemId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(result => result.json())
      .then(() => dispatch({
        type: DELETE_ITEM_SUCCESS,
        itemId,
      }))
      .catch(error => dispatch({
        type: DELETE_ITEM_ERROR,
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

    case DELETE_ITEM_START:
      state = {
        ...state,
        ui: {
          state: 'START',
          error: null,
        },
      }
      return state
    case DELETE_ITEM_SUCCESS:
      state = {
        data: state.data.filter(item => item.id !== action.itemId),
        ui: {
          state: 'SUCCESS',
          error: null,
        },
      }
      return state
    case DELETE_ITEM_ERROR:
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

/**
 * @see https://redux-starter-kit.js.org/api/createslice#createslice
 */
const catalogSlice = createSlice({
  slice: '@catalogSlice',
  initialState: {
    data: [],
    /** @see  https://github.com/reduxjs/redux/issues/595
     * conventions / recommendations for UI state
     */
    ui: {
      state: 'init',
      error: null,
    },
  },
  reducers: {
    setCatalogItemsLoading: (state, action) => {
      const { isLoading } = action.payload
      state.ui = {
        isLoading,
        error: null,
      }
    },
    loadCatalogItems: (state, action) => {
      state.data = action.payload.items
    },
    setCatalogItemsError: (state, action) => {
      state.ui.error = action.payload.error
    },
  },
})

const { actions: catalogActions, reducer } = catalogSlice

const getCatalogItems = () => {
  return async dispatch => {
    dispatch(catalogActions.setCatalogItemsLoading({ isLoading: true }))

    try {
      const response = await fetch('http://localhost:3333/catalog')
      const items = await response.json()
      dispatch(catalogActions.loadCatalogItems({ items }))

    } catch (error) {
      dispatch(catalogActions.setCatalogItemsError({ error }))
    }

    dispatch(catalogActions.setCatalogItemsLoading({ isLoading: false }))
  }
}

const actions = {
  ...catalogActions,
  getCatalogItems,
}

export {
  reducer as default,
  actions,
}
