import { createSlice } from 'redux-starter-kit'

const adminSlice = createSlice({
  slice: '@adminSlice',
  initialState: {
    data: [
      {
        id: '',
        avatar: '',
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
      },
    ],
    ui: {
      state: 'init',
      error: null,
    },
  },
  reducers: {
    setUsersLoading: (state, action) => {
      const { isLoading } = action.payload
      state.ui = {
        isLoading,
      }
    },
    setUsersError: (state, action) => {
      state.ui.error = action.payload.error
    },
    setUsersSuccess: (state, action) => {
      state.data = action.payload.users
    },
  },
})

const { actions: adminActions, reducer } = adminSlice

// read all
const readUsers = () => {
  return async dispatch => {
    dispatch(adminActions.setUsersLoading({ isLoading: true }))

    try {
      const response = await fetch('http://localhost:3333/users')
      const users = await response.json()
      dispatch(adminActions.setUsersSuccess({ users }))

    } catch (error) {
      dispatch(adminActions.setUsersError({ error }))
    }

    dispatch(adminActions.setUsersLoading({ isLoading: false }))
  }
}

const actions = {
  readUsers,
}

export {
  reducer as default,
  actions,
}
