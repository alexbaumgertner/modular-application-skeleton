import React from 'react'
import userItemPropTypes from './UserItem.propTypes'

/**
 * @param {userItemPropTypes} props
 */
const UserItem = props => {
  return (
    <li className='user-item'>
      <div className='user-item__name'>{props.user.name}</div>
    </li>
  )
}

UserItem.propTypes = {
  user: userItemPropTypes,
}

export default UserItem
