import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'


const CatalogContainer = lazy(() =>
  import(/* webpackChunkName: "CatalogContainer" */ '../../Containers/CatalogContainer'),
)
const CatalogItemContainer = lazy(() =>
  import(/* webpackChunkName: "CatalogItemContainer" */ '../../Containers/CatalogItemContainer'),
)
const CatalogItemCreateContainer = lazy(() =>
  import(/* webpackChunkName: "CatalogItemCreateContainer" */ '../../Containers/CatalogItemCreateContainer'),
)
const CatalogItemEditContainer = lazy(() =>
  import(/* webpackChunkName: "CatalogItemEditContainer" */ '../../Containers/CatalogItemEditContainer'),
)

const CatalogRoute = () => {
  return (
    <div className="catalog-route">
      <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular />
        <Header.Content data-test-id="catalog-route__header">Catalog Route</Header.Content>
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
