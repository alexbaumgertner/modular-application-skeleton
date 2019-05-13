import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

class CatalogList extends Component {

  renderItem(catalogItem) {
    return (
      <Table.Row key={catalogItem.id}>
        <Table.Cell>
          <Link to={`/catalog/${catalogItem.id}`}>
            {catalogItem.name}
          </Link>
        </Table.Cell>
        <Table.Cell>
          {catalogItem.price}
        </Table.Cell>
        <Table.Cell>
          {format(parse(catalogItem.date), 'MM/DD/YYYY')}
        </Table.Cell>
        <Table.Cell>
          {catalogItem.productAdjective}
        </Table.Cell>
        <Table.Cell>
          {catalogItem.department}
        </Table.Cell>
      </Table.Row>
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
}

export default CatalogList
