import { createSlice } from 'redux-starter-kit'

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
      }
    },
    setCatalogItemsError: (state, action) => {
      state.ui.error = action.payload.error
    },
    setCatalogItemsSuccess: (state, action) => {
      state.data = action.payload.items
    },

    setCatalogItemLoading: (state, action) => {
      const { itemId, isLoading } = action.payload
      state.ui = {
        isLoading,
        itemId,
      }
    },
    setCatalogItemError: (state, action) => {
      const { itemId, error } = action.payload
      state.ui = {
        itemId,
        error,
      }
    },

    createCatalogItemSuccess: (state, action) => {
      const { item } = action.payload
      state.data.push(item)
    },
    updateCatalogItemSuccess: (state, action) => {
      const { item } = action.payload
      state.data[state.data.findIndex(i => i.id === item.id)] = item
    },
    readCatalogItemSuccess: (state, action) => {
      const { item } = action.payload
      const itemIndex = state.data.findIndex(i => i.id === item.id)

      if (itemIndex) {
        state.data[itemIndex] = item
      } else {
        state.data.push(item)
      }
    },

    deleteCatalogItemSuccess: (state, action) => {
      const { itemId } = action.payload
      state.data = state.data.filter(item => item.id !== itemId)
    },
  },
})

const { actions: catalogActions, reducer } = catalogSlice

// read all
const readCatalogItems = () => {
  return async dispatch => {
    dispatch(catalogActions.setCatalogItemsLoading({ isLoading: true }))

    try {
      const response = await fetch('http://localhost:3333/catalog')
      const items = await response.json()
      dispatch(catalogActions.setCatalogItemsSuccess({ items }))

    } catch (error) {
      dispatch(catalogActions.setCatalogItemsError({ error }))
    }

    dispatch(catalogActions.setCatalogItemsLoading({ isLoading: false }))
  }
}

// create
const createCatalogItem = values => {
  return async dispatch => {
    dispatch(catalogActions.setCatalogItemLoading({ itemId: values.id, isLoading: true }))
    let item

    try {
      const response = await fetch('http://localhost:3333/catalog',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      )
      item = await response.json()
      dispatch(catalogActions.createCatalogItemSuccess({ item }))

    } catch (error) {
      dispatch(catalogActions.setCatalogItemError({ error }))
    }

    dispatch(catalogActions.setCatalogItemLoading({ itemId: values.id, isLoading: false }))
    return item
  }
}

// read
const readCatalogItem = itemId => {
  return async dispatch => {
    dispatch(catalogActions.setCatalogItemLoading({ itemId, isLoading: true }))

    try {
      const response = await fetch(`http://localhost:3333/catalog/${itemId}`)
      const item = await response.json()

      dispatch(catalogActions.readCatalogItemSuccess({ item }))

    } catch (error) {
      dispatch(catalogActions.setCatalogItemError({ error }))
    }

    dispatch(catalogActions.setCatalogItemLoading({ itemId, isLoading: false }))
  }
}

// update
const updateCatalogItem = (values, itemId) => {
  return async dispatch => {
    dispatch(catalogActions.setCatalogItemLoading({ itemId, isLoading: true }))

    try {
      const response = await fetch(`http://localhost:3333/catalog/${itemId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      )
      const item = await response.json()

      dispatch(catalogActions.updateCatalogItemSuccess({ item }))

    } catch (error) {
      dispatch(catalogActions.setCatalogItemError({ error }))
    }

    dispatch(catalogActions.setCatalogItemLoading({ itemId, isLoading: false }))
  }
}

// delete
const deleteCatalogItem = itemId => {
  return async dispatch => {
    dispatch(catalogActions.setCatalogItemLoading({ itemId, isLoading: true }))

    try {
      await fetch(`http://localhost:3333/catalog/${itemId}`,
        {
          method: 'DELETE',
        },
      )

      dispatch(catalogActions.deleteCatalogItemSuccess({ itemId }))

    } catch (error) {
      dispatch(catalogActions.setCatalogItemError({ error }))
    }

    dispatch(catalogActions.setCatalogItemLoading({ itemId, isLoading: false }))
  }
}

const actions = {
  readCatalogItems,

  createCatalogItem,
  readCatalogItem,
  updateCatalogItem,
  deleteCatalogItem,
}

export {
  reducer as default,
  actions,
}
