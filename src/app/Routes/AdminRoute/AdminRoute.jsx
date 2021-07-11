import React from 'react'

import { AdminContainer } from '../../Containers'
import { Header, Icon } from 'semantic-ui-react'


const AdminRoute = () => {
  return <div className="admin-route">
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content data-test-id="catalog-route__header">Admin Route</Header.Content>
    </Header>
    <AdminContainer />
  </div>
}

export default AdminRoute
