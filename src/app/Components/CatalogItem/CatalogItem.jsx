import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CatalogItem extends Component {
  render() {
    const {
      name,
      price,
      productAdjective,
      department,
      date,
    } = this.props.item

    return (
      <div className="catalog-item">
        <div className="catalog-item__date">{date}</div>
        <div className="catalog-item__name">{name}</div>
        <div className="catalog-item__price">{price}</div>
        <div className="catalog-item__productAdjective">{productAdjective}</div>
        <div className="catalog-item__department">{department}</div>
      </div>
    )
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object,
}

export default CatalogItem
