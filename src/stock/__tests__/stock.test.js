import React from 'react'
import TestRenderer from 'react-test-renderer'

import Stock from '../stock'


describe('stock', () =>  {
  describe('Stock', () => {
    it('render component', () =>  {
      const testRenderer = TestRenderer.create(<Stock />).toJSON()
      expect(testRenderer).toMatchSnapshot()
      expect(testRenderer.type).toEqual('div')
    })
  })
})
