import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CatalogItemEdit } from '../../Components'
import { actions } from '../CatalogContainer/CatalogContainer.redux'
import PropTypes from 'prop-types'


class CatalogItemCreateContainer extends Component {
  onSubmit = (values) => {
    this.props
      .createCatalogItem(values)
      .then(({ id }) => this.props.history.push(`/catalog/${id}`))
  }

  render() {
    return (
      <div className="catalog-item-create-container">
        <CatalogItemEdit item={{}} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

CatalogItemCreateContainer.propTypes = {
  createCatalogItem: PropTypes.func,
  history: PropTypes.object,
}

const CatalogItemCreateContainerConnected = connect(
  null,
  actions,
)(CatalogItemCreateContainer)

export {
  CatalogItemCreateContainerConnected as default,
  CatalogItemCreateContainer,
}
