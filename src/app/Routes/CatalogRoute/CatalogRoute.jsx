import React from 'react'
import { Route } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

import {
  CatalogContainer,
  CatalogItemContainer,
  CatalogItemEditContainer,
} from '../../Containers'

const CatalogRoute = () => {
  return (
    <div className="catalog-route">
      <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular />
        <Header.Content>Catalog Route</Header.Content>
      </Header>
      <Route exact path="/catalog" component={CatalogContainer} />
      <Route exact path="/catalog/:id" component={CatalogItemContainer} />
      <Route exact path="/catalog/:id/edit" component={CatalogItemEditContainer} />
    </div>
  )
}

export default CatalogRoute