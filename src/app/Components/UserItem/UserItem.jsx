import React from 'react'
import { Item } from 'semantic-ui-react'

import userItemPropTypes from './UserItem.propTypes'

/**
 * @param {userItemPropTypes} props
 */
const UserItem = props => {
  return (
    <li className="user-item">
      <div className="user-item__name">{props.user.name}</div>
      <div className="user-item__email">{props.user.email}</div>
      <div className="user-item__phoneNumber">{props.user.phoneNumber}</div>
      <Item image={props.user.avatar} />
    </li>
  )
}

UserItem.propTypes = {
  user: userItemPropTypes,
}

export default UserItem
