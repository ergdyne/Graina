import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Row from '../../src/components/Row'
import Cell from '../../src/components/Cell'
import testGrid from '../../test_data/testGrid'

describe("Row", ()=>{
  const testRows = testGrid().slice(0,3)
  const row = shallow(<Row data={testRows} size={150}/>)
  describe("display qualities",()=>{
    it("number of cells matches input",()=>{
      expect(row.find(Cell).length).to.equal(testRows.length)
    })
  })
})