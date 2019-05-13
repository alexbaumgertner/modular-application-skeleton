import React, { Component } from 'react'

import { CatalogItem } from '../../Components'

class CatalogItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      item: null,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: {
          id: itemId,
        }
      }
    } = this.props

    fetch(`http://localhost:3333/catalog/${itemId}`)
      .then(result => result.json())
      .then(item => this.setState({ item }))
      .catch(error => this.setState({ error }))
  }


  render() {
    return (
      <div className="catalog-item-container">
        {this.state.item && <CatalogItem item={this.state.item} />}
      </div>
    )
  }
}

export default CatalogItemContainer