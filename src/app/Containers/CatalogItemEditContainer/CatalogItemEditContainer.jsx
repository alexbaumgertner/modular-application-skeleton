import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CatalogItemEdit } from '../../Components'

class CatalogItemEditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      item: null,
    }
  }

  componentDidMount() {
    const {
      match: {
        params: {
          id: itemId,
        },
      },
    } = this.props

    fetch(`http://localhost:3333/catalog/${itemId}`)
      .then(result => result.json())
      .then(item => this.setState({ item }))
      .catch(error => this.setState({ error }))
  }


  onSubmit = (values) =>  {
    console.log('values: ', values) // eslint-disable-line

    console.log("this.props: ", this.props); // eslint-disable-line

    const {
      history,
      match: {
        params: {
          id: itemId,
        },
      },
    } = this.props

    fetch(`http://localhost:3333/catalog/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values), // body data type must match "Content-Type" header
    })
      .then(result => result.json())
      .then(data => {
        console.log("data: ", data); // eslint-disable-line
        history.push('/catalog')

        // this.setState() update state by values
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className="catalog-item-edit-container">
        {this.state.item && <CatalogItemEdit item={this.state.item} onSubmit={this.onSubmit} />}
      </div>
    )
  }
}

CatalogItemEditContainer.propTypes = {
  match: PropTypes.object,
}

export default CatalogItemEditContainer
