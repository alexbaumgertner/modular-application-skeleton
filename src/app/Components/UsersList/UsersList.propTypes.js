import PropTypes from 'prop-types'
import { userItemPropTypes } from '../UserItem'

const usersListPropTypes = {
  users: PropTypes.arrayOf(userItemPropTypes),
}

export default usersListPropTypes
