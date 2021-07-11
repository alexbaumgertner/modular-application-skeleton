import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { LazyImage } from 'react-lazy-images'

import './CatalogItem.css'

const CatalogItemImages = ({ images }) => (
  <div className="catalog-item__images">
    {images.map(imageItem => (
        <LazyImage
          key={imageItem.small}
          src={imageItem.big}
          placeholder={({ ref }) => (
            <img
              ref={ref}
              src={imageItem.small}
              alt="small"
              className="catalog-item__image catalog-item__image_size_small"
            />
          )}
          actual={({ imageProps }) => (
              <img {...imageProps}
                 className="catalog-item__image catalog-item__image_size_big" />
            )
          }
        />
      )
    )}
  </div>
)

CatalogItemImages.propTypes = {
  images: PropTypes.array,
}

class CatalogItem extends Component {
  render() {
    const {
      name,
      image,
      images,
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
            <Item.Description>{text}</Item.Description>
            <Item.Meta>
              <div className="catalog-item__date">
                date: {format(parse(date), 'MM/DD/YYYY')}
              </div>
              <div className="catalog-item__price">price: {price}</div>
              <div className="catalog-item__productAdjective">productAdjective: {productAdjective}</div>
              <div className="catalog-item__department">department: {department}</div>
            </Item.Meta>
            {images && <CatalogItemImages images={images} />}
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
