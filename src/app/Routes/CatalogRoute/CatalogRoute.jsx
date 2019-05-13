import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

import {
  Catalog,
} from '../../Containers'

const CatalogRoute = () => {
  return (
    <div className="catalog-route">
      <Header as='h2' icon textAlign='center'>
        <Icon name='list layout' circular />
        <Header.Content>Catalog Route</Header.Content>
      </Header>
      <Catalog />
    </div>
  )
}

export default CatalogRoute
