import React from 'react'
import TestRenderer from 'react-test-renderer'

import StockForm from '../stockForm'


describe('StockForm', () =>  {
  it('render component', () =>  {
    const testRenderer = TestRenderer.create(<StockForm />).toJSON()
    expect(testRenderer).toMatchSnapshot()
    expect(testRenderer.type).toEqual('div')
  })
})
