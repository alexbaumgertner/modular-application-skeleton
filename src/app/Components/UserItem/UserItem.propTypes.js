import PropTypes from 'prop-types'

/**
 * @type {{
 *   name: Number,
 *   id: String
 * }}
 */
const userItemPropTypes = PropTypes.shape({
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  phoneNumber: PropTypes.string,
})

export default userItemPropTypes
