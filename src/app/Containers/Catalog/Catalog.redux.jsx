// action creators
// reducers
// sagas
// types
// etc redux
const initState = [
  {
    'id': '447a4dfa-43c8-4da3-9d15-2f0038c84cc6',
    'name': 'Practical Concrete Chair',
    'price': '337.00',
    'productAdjective': 'Handcrafted',
    'department': 'Grocery',
    'date': 'Tue Feb 19 2019 00:41:26 GMT+0400 (Georgia Standard Time)',
  },
]

const CatalogRedux = (previousState = initState, action) => {
  switch (action.type) {
    case 'ADD_CATALOG_ITEM':
      return previousState.push(action.payload)

    case 'UPDATE_CATALOG_ITEM':
      return previousState

    case 'DELETE_CATALOG_ITEM':
      return previousState

    default:
      return previousState
  }
}

export default CatalogRedux
