// action creators
// reducers
// sagas
// types
// etc redux
const initState = [
  {
    id: 1,
    name: 'admin',
  },
]

const UsersRedux = (previousState = initState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return previousState.push(action.payload)

    case 'UPDATE_USER':
      return previousState

    case 'DELETE_USER':
      return previousState

    default:
      return previousState
  }
}

export default UsersRedux
