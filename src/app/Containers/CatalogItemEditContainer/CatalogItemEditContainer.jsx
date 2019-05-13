import React, { Component } from 'react'
import { CatalogItemEdit } from '../../Components'

class CatalogItemEditContainer extends Component {
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


  onSubmit(values) {
    console.log("values: ", values); // eslint-disable-line
  }

  render() {
    return (
      <div className="catalog-item-edit-container">
        {this.state.item && <CatalogItemEdit item={this.state.item} onSubmit={this.onSubmit} />}
      </div>
    )
  }
}

export default CatalogItemEditContainer
