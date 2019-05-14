import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import CatalogListRow from '../CatalogListRow'

class CatalogList extends Component {

  renderItem = (catalogItem) => {
    return (
      <CatalogListRow
        key={catalogItem.id}
        item={catalogItem}
        onSave={this.props.onSave}
      />
    )
  }

  render() {
    const {
      catalog,
    } = this.props

    return (
      <div className="catalog-list">
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>name</Table.HeaderCell>
              <Table.HeaderCell>price</Table.HeaderCell>
              <Table.HeaderCell>date</Table.HeaderCell>
              <Table.HeaderCell>productAdjective</Table.HeaderCell>
              <Table.HeaderCell>department</Table.HeaderCell>
              <Table.HeaderCell>controls</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {catalog.map(this.renderItem)}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

CatalogList.propTypes = {
  catalog: PropTypes.array,
  onSave: PropTypes.func,
}

export default CatalogList
