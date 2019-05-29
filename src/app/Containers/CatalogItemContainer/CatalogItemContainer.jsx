import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { CatalogItem } from '../../Components'
import { actions } from '../CatalogContainer/CatalogContainer.redux'

class CatalogItemContainer extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          id: itemId,
        }
      }
    } = this.props

    this.props.readCatalogItem(itemId)
  }

  render() {
    const {
      match: {
        params: {
          id: itemId,
        }
      },
      item,
    } = this.props

    return (
      <div className="catalog-item-container">
        <Link to={`/catalog/${itemId}/edit`}><Button>Edit</Button></Link>
        {item && <CatalogItem item={item} />}
      </div>
    )
  }
}

CatalogItemContainer.propTypes = {
  match: PropTypes.object,
  readCatalogItem: PropTypes.func,
  item: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.catalog.data.find(item => item.id === ownProps.match.params.id)
  }
}

const CatalogItemContainerConnected = connect(
  mapStateToProps,
  actions,
)(CatalogItemContainer)

export {
  CatalogItemContainerConnected as default,
  CatalogItemContainer,
}
