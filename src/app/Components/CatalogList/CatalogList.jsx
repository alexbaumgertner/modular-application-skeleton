import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CatalogItem from '../CatalogItem'

class CatalogList extends Component {

  renderItem(catalogItem) {
    return (
      <CatalogItem
        key={catalogItem.id}
        item={catalogItem}
      />
    )
  }

  render() {
    const {
      catalog,
    } = this.props

    return (
      <div className="catalog-list">
        {catalog.map(this.renderItem)}
      </div>
    )
  }
}

CatalogList.propTypes = {
  catalog: PropTypes.array,
}

export default CatalogList
