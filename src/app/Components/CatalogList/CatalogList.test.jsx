import React from 'react'
import { shallow } from 'enzyme'
import db from '../../../../utils/dev/db.json'

import CatalogList from './CatalogList'
import CatalogListRow from '../CatalogListRow'

describe('CatalogList', () => {
  const catalog = db.catalog

  test('should render catalog', () => {
    const wrapper = shallow(
      <CatalogList
        catalog={catalog}
      />,
    )

    expect(wrapper.find(CatalogListRow).length).toBe(catalog.length)
  })
})

