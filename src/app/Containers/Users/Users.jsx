import React, { Component } from 'react'
import { connect } from 'react-redux'
import UsersList, { usersListPropTypes } from '../../Components/UsersList'

class Users extends Component {
  render() {
    const { users, add_user, delete_user } = this.props

    return (
      <div className="users">
        <div className="users__title">Users</div>
        <div className="users__list">
          <UsersList
            users={users}
            addUser={add_user}
            deleteUser={delete_user}
          />
        </div>
      </div>
    )
  }
}

Users.propTypes = usersListPropTypes

/**
 * @see https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops-object
 * @param state
 */
const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = dispatch => ({
  add_user: user => dispatch({ type: 'ADD_USER', payload: user }),
  delete_user: user => dispatch({ type: 'DELETE_USER', payload: user.id }),
})

const UsersConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)

export { UsersConnected as default }
