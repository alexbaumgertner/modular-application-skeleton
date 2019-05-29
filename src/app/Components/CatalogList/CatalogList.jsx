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
        onDelete={this.props.onDelete}
      />
    )
  }

  render() {
    const {
      catalog,
      totalPrice,
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
          <Table.Footer>
            <Table.Row>
              <Table.Cell>ИТОГО</Table.Cell>
              <Table.Cell>{totalPrice}</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

CatalogList.propTypes = {
  catalog: PropTypes.array.isRequired,
  totalPrice: PropTypes.number,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
}

export default CatalogList
