import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CatalogList } from '../../Components'

class CatalogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catalog: [],
      error: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3333/catalog')
      .then(result => result.json())
      .then(catalog => this.setState({ catalog }))
      .catch(error => this.setState({ error }))
  }


  render() {
    const {
      catalog,
    } = this.state

    return (
      <div className="catalog-container">
        <CatalogList catalog={catalog} />
      </div>
    )
  }
}

CatalogContainer.propTypes = {
  catalog: PropTypes.array,
}

export default CatalogContainer
