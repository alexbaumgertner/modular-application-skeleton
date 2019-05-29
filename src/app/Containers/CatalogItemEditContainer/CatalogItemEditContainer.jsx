import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CatalogItemEdit } from '../../Components'
import { actions } from '../CatalogContainer/CatalogContainer.redux'

class CatalogItemEditContainer extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          id: itemId,
        },
      },
    } = this.props

    this.props.readCatalogItem(itemId)
  }

  onSubmit = (values) =>  {
    const {
      history,
      item: {
        id: itemId
      }
    } = this.props

    this.props
      .updateCatalogItem(values, itemId)
      .then(() => history.push('/catalog'))
  }

  render() {
    return (
      <div className="catalog-item-edit-container">
        {this.props.item && <CatalogItemEdit item={this.props.item} onSubmit={this.onSubmit} />}
      </div>
    )
  }
}

CatalogItemEditContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  item: PropTypes.object,
  readCatalogItem: PropTypes.func,
  updateCatalogItem: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.catalog.data.find(item => item.id === ownProps.match.params.id)
  }
}

const CatalogItemEditContainerConnected = connect(
  mapStateToProps,
  actions,
)(CatalogItemEditContainer)

export {
  CatalogItemEditContainerConnected as default,
  CatalogItemEditContainer
}
