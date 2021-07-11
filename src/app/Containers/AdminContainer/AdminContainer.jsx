import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'

import {
  UsersList,
} from '../../Components'
import { actions } from './AdminContainer.redux'
import './AdminContainer.css'

class AdminContainer extends Component {
  componentDidMount() {
    this.props.readUsers()
  }

  render() {
    return (
      <div className="admin-container">
        <UsersList users={this.props.users} />
      </div>
    )
  }
}

AdminContainer.propTypes = {
  users: PropTypes.array,
  readUsers: PropTypes.func,
}

const adminSelector = createSelector(
  ['admin.data']
)

const adminUISelector = createSelector(
  ['admin.ui']
)

const mapStateToProps = state => {
  return {
    users: adminSelector(state),
    ui: adminUISelector(state),
  }
}


const AdminContainerConnected = connect(
  mapStateToProps,
  actions,
)(AdminContainer)

export {
  AdminContainerConnected as default,
  AdminContainer,
}
