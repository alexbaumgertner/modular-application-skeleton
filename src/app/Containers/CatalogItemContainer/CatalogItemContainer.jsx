import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

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
    const {
      match: {
        params: {
          id: itemId,
        }
      }
    } = this.props

    return (
      <div className="catalog-item-container">
        <Link to={`/catalog/${itemId}/edit`}><Button>Edit</Button></Link>
        {this.state.item && <CatalogItem item={this.state.item} />}
      </div>
    )
  }
}

CatalogItemContainer.propTypes = {
  match: PropTypes.object,
}

export default CatalogItemContainer
