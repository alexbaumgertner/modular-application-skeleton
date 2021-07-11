import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'

import { actions } from './ProfileContainer.redux'

class ProfileContainer extends Component {
  static propTypes = {
    readProfile: PropTypes.func,
    profile: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
      phoneNumber: PropTypes.string,
      favorites: PropTypes.array,
    }),
  }

  componentDidMount() {
    this.props.readProfile()
  }

  render() {
    const {
      avatar,
      name,
      email,
      password,
      phoneNumber,
      favorites,
    } = this.props.profile

    return (
      <div className="profile-container">
        <img src={avatar} className="profile-container__avatar" />
        <div className="profile-container__name">{name}</div>
        <div className="profile-container__email">{email}</div>
        <div className="profile-container__password">{password}</div>
        <div className="profile-container__phoneNumber">{phoneNumber}</div>
        <div className="profile-container__favorites">{favorites}</div>
      </div>
    )
  }
}

const profileSelector = createSelector(
  ['profile.data'],
)

const profileUISelector = createSelector(
  ['profile.ui'],
)

const mapStateToProps = state => {
  return {
    profile: profileSelector(state),
    ui: profileUISelector(state),
  }
}

const ProfileContainerConnected = connect(
  mapStateToProps,
  actions,
)(ProfileContainer)

export {
  ProfileContainerConnected as default,
  ProfileContainer,
}
