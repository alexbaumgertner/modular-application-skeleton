import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div className="users">
        <div className="users__title">Users</div>
        <div className="users__list">

        </div>
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array,
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
