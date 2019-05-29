import PropTypes from 'prop-types'

/**
 * @type {{
 *   name: Number,
 *   id: String
 * }}
 */
const userItemPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
})

export default userItemPropTypes
