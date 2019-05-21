import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

import {
  CatalogContainer,
  CatalogItemContainer,
  CatalogItemEditContainer,
  CatalogItemCreateContainer,
} from '../../Containers'

const CatalogRoute = () => {
  return (
    <div className="catalog-route">
      <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular />
        <Header.Content>Catalog Route</Header.Content>
      </Header>
      <Switch>
        <Route exact path="/catalog" component={CatalogContainer} />
        <Route exact path="/catalog/new" component={CatalogItemCreateContainer} />
        <Route exact path="/catalog/:id" component={CatalogItemContainer} />
        <Route exact path="/catalog/:id/edit" component={CatalogItemEditContainer} />
      </Switch>
    </div>
  )
}

export default CatalogRoute
