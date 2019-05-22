import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { CatalogList } from '../../Components'
import { actions } from './CatalogContainer.redux'
import './CatalogContainer.css'

class CatalogContainer extends Component {
  componentDidMount() {
    this.props.readCatalogItems()
  }

  onSave = (values) => {
    this.props.updateCatalogItem(values, values.id)
  }

  onDelete = (itemId) => {
    this.props.deleteCatalogItem(itemId)
  }

  renderFirstItem(item) {
    return (
      <div className="catalog-container__first">
        <p>name: {item.name}</p>
        <p>price: {item.price}</p>
        <p>productAdjective: {item.productAdjective}</p>
        <p>department: {item.department}</p>
      </div>
    )
  }

  render() {
    const {
      catalog,
      totalPrice,
    } = this.props

    const firstItem = catalog[0]

    return (
      <div className="catalog-container">
        {firstItem && this.renderFirstItem(firstItem)}
        <div className="catalog-container__list">
          <Link to={`/catalog/new`}><Button>Create</Button></Link>
          <CatalogList
            catalog={catalog}
            totalPrice={totalPrice}
            onSave={this.onSave}
            onDelete={this.onDelete}
          />
        </div>
      </div>
    )
  }
}

CatalogContainer.propTypes = {
  catalog: PropTypes.array,
}

const catalogSelector = createSelector(
  ['catalog.data']
)

const catalogTotalPriceSelector = createSelector(
  [catalogSelector],
  catalog => catalog.reduce((acc, cur) => (acc + parseFloat(cur.price)), 0)
)

const catalogUISelector = createSelector(
  ['catalog.ui']
)

const mapStateToProps = state => {
  return {
    catalog: catalogSelector(state),
    totalPrice: catalogTotalPriceSelector(state),
    ui: catalogUISelector(state),
  }
}

const CatalogContainerConnected = connect(
  mapStateToProps,
  actions,
)(CatalogContainer)

export {
  CatalogContainerConnected as default,
  CatalogContainer,
}
