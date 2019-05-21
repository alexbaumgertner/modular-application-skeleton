import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import { CatalogList } from '../../Components'
import { actions } from './CatalogContainer.redux'
import './CatalogContainer.css'

class CatalogContainer extends Component {
  componentDidMount() {
    this.props.fetchCatalog()
  }

  onSave = (values) => {
    this.props.updateCatalogItem(values)
  }

  renderFirstItem(item) {
    return (
      <div className="catalog-container__first">
        <p>name: {item.name}</p>
        <p>price: {item.price}</p>
        <p>productAdjective: {item.productAdjective}</p>
        <p>department: {item.department}</p>
      </div>
    )
  }

  render() {
    const {
      catalog,
    } = this.props

    const firstItem = catalog[0]

    return (
      <div className="catalog-container">
        {firstItem && this.renderFirstItem(firstItem)}
        <div className="catalog-container__list">
          <Link to={`/catalog/new`}><Button>Create</Button></Link>
          <CatalogList
            catalog={catalog}
            onSave={this.onSave}
          />
        </div>
      </div>
    )
  }
}

CatalogContainer.propTypes = {
  catalog: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    catalog: state.catalog.data,
    ui: state.catalog.ui,
  }
}

const CatalogContainerConnected = connect(
  mapStateToProps,
  actions,
)(CatalogContainer)

export {
  CatalogContainerConnected as default,
  CatalogContainer,
}
