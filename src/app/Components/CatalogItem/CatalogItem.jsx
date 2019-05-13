import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

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
      <Card className="catalog-item">
        <Card.Meta className="catalog-item__date">
          {date}
        </Card.Meta>
        <Card.Content>
          <div className="catalog-item__name">{name}</div>
          <div className="catalog-item__price">{price}</div>
          <div className="catalog-item__productAdjective">{productAdjective}</div>
        </Card.Content>
        <Card.Content extra>
          <div className="catalog-item__department">{department}</div>
        </Card.Content>
      </Card>
    )
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object,
}

export default CatalogItem
