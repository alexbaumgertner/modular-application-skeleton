import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CatalogList } from '../../Components'

class Catalog extends Component {
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
      <div className="catalog">
        <CatalogList catalog={catalog} />
      </div>
    )
  }
}

Catalog.propTypes = {
  catalog: PropTypes.array,
}

export default Catalog
