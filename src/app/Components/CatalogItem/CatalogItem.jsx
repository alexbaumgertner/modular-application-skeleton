import React, { Component, lazy } from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

import './CatalogItem.css'

const Markdown = lazy(() =>
  import(/* webpackChunkName: "Markdown" */ 'react-markdown'),
)

class CatalogItem extends Component {
  render() {
    const {
      name,
      image,
      text,
      price,
      productAdjective,
      department,
      date,
    } = this.props.item

    return (
      <Item.Group className="catalog-item-group">
        <Item className="catalog-item">
          <Item className="catalog-item__image" image={image} />
          <Item.Content className="catalog-item__content">
            <Item.Header className="catalog-item__name">name: {name}</Item.Header>
            <Item.Description>
              <Markdown source={text} />
            </Item.Description>
            <Item.Meta>
              <div className="catalog-item__date">
                date: {format(parse(date), 'MM/DD/YYYY')}
              </div>
              <div className="catalog-item__price">price: {price}</div>
              <div className="catalog-item__productAdjective">productAdjective: {productAdjective}</div>
              <div className="catalog-item__department">department: {department}</div>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

CatalogItem.propTypes = {
  item: PropTypes.object,
}

export default CatalogItem
