import React from 'react'
import UserItem from '../UserItem'
import usersListPropTypes from './UsersList.propTypes'

const UsersList = props => {
  return (
    <ul className="user-list">
      {props.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

UsersList.propTypes = usersListPropTypes

export default UsersList
