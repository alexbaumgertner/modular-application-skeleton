import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CatalogItemEdit } from '../../Components'
import { actions } from '../CatalogContainer/CatalogContainer.redux'


class CatalogItemCreateContainer extends Component {
  onSubmit = (values) => {
    this.props
      .saveCatalogItem(values)
      .then(({ item: { id } }) => this.props.history.push(`/catalog/${id}`))
  }

  render() {
    return (
      <div className="catalog-item-create-container">
        <CatalogItemEdit item={{}} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

CatalogItemCreateContainer.propTypes = {}

const CatalogItemCreateContainerConnected = connect(
  null,
  actions,
)(CatalogItemCreateContainer)

export {
  CatalogItemCreateContainerConnected as default,
  CatalogItemCreateContainer,
}
