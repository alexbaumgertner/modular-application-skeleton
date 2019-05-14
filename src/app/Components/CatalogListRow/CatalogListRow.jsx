import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import format from 'date-fns/format'
import parse from 'date-fns/parse'

class CatalogListRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.item,
    }
  }

  onClick = () => {
    this.setState({
      mode: 'edit',
    })
  }

  onSave = () => {
    this.setState({
      mode: 'show',
    })

    this.props.onSave(this.state.item)
  }

  onChange = (e) => {
    const {
      name,
      value,
    } = e.target

    this.setState(state => {
      const updatedItem = {
        ...state.item,
        [name]: value,
      }

      return {
        item: updatedItem,
      }
    })
  }

  render() {
    if (!this.state.item) {
      return null
    }

    const {
      id,
      name,
      price,
      date,
      productAdjective,
      department,
    } = this.state.item

    return (
      <Table.Row>
        <Table.Cell>
          {
            this.state.mode === 'edit' ?
              (<input size={name.length} onChange={this.onChange} name="name" value={name} />) :
              (
                <Link to={`/catalog/${id}`}>
                  {name}
                </Link>
              )
          }
        </Table.Cell>
        <Table.Cell>
          {
            this.state.mode === 'edit' ?
              (<input size={price.length} onChange={this.onChange} name="price" value={price} />) :
              price
          }
        </Table.Cell>
        <Table.Cell>
          {format(parse(date), 'MM/DD/YYYY')}
        </Table.Cell>
        <Table.Cell>
          {
            this.state.mode === 'edit' ?
              (<input size={productAdjective.length} onChange={this.onChange} name="productAdjective"
                      value={productAdjective} />) :
              productAdjective
          }
        </Table.Cell>
        <Table.Cell>
          {
            this.state.mode === 'edit' ?
              (<input size={department.length} onChange={this.onChange} name="department" value={department} />) :
              department
          }
        </Table.Cell>
        <Table.Cell>
          {
            this.state.mode === 'edit' ?
              (<Button primary onClick={this.onSave}>Save</Button>) :
              (<Button onClick={this.onClick}>Edit</Button>)
          }
        </Table.Cell>
      </Table.Row>
    )
  }
}

CatalogListRow.propTypes = {
  item: PropTypes.object,
}

export default CatalogListRow
