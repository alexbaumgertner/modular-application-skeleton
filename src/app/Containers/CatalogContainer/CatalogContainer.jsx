import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CatalogList } from '../../Components'
import { actions } from './CatalogContainer.redux'
import './CatalogContainer.css'

class CatalogContainer extends Component {
  constructor(props) {
    super(props)
    /*
	 this.state = {
		  catalog: [],
		  error: null,
		}
		*/
  }

  componentDidMount() {
    this.props.fetchCatalog()
  }

  onSave = (values) => {
    /*
	fetch(`http://localhost:3333/catalog/${values.id}`, {
		  method: 'PUT',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(values), // body data type must match "Content-Type" header
		})
		  .then(result => result.json())
		  .then(item => {})
		  .catch(error => this.setState({ error }))
		  */
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
  console.log("mapStateToProps state: ", state.catalog); // eslint-disable-line
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
