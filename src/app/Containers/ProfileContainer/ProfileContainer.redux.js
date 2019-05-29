import { createSlice } from 'redux-starter-kit'

const profileSlice = createSlice({
  slice: '@profileSlice',
  initialState: {
    data: {},
    ui: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    setProfileError: (state, action) => {
      const { error } = action.payload
      state.ui = {
        isLoading: false,
        error,
      }
    },
    setProfileLoading: (state, action) => {
      const { isLoading } = action.payload
      state.ui = {
        isLoading,
        error: state.ui.error,
      }
    },
    readProfileSuccess: (state, action) => {
      const { profile } = action.payload
      state.data = profile
      state.ui = {
        isLoading: false,
        error: null,
      }
    },
  },
})

const { actions: profileActions, reducer } = profileSlice

// read
const readProfile = () => {
  return async dispatch => {
    dispatch(profileActions.setProfileLoading({ isLoading: true }))

    // Async
    try {
      const response = await fetch(`http://localhost:3333/profile/`)
      const profile = await response.json()

      dispatch(profileActions.readProfileSuccess({ profile }))

    } catch (error) {
      dispatch(profileActions.setProfileError({ error }))
    }

    dispatch(profileActions.setProfileLoading({ isLoading: false }))
  }
}

// update
const updateProfile = () => {
}

const actions = {
  readProfile,
  updateProfile,
}

export {
  reducer as default,
  actions,
}
