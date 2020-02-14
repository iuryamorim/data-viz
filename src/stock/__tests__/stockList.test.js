import React from 'react'
import TestRenderer from 'react-test-renderer'

import StockList from '../stockList'


describe('StockList', () => {
  it('render component', () =>  {
    const testRenderer = TestRenderer.create(<StockList />).toJSON()
    expect(testRenderer).toMatchSnapshot()
    expect(testRenderer.type).toEqual('div')
  })
})
