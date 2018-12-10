import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Row from '../../../client/components/Row'
import Cell from '../../../client/components/Cell'
import testGrid from '../../../common/test_data/testGrid'

describe("Row", ()=>{
  const testRow = testGrid().slice(0,4)
  const row = shallow(<Row data={testRow.slice(0,3)} y={0} size={150} xStart={0} xEnd={2}/>)
  const shortRow = shallow(<Row data={testRow.slice(0,2)} y={0} size={150} xStart={0} xEnd={2}/>)
  const longRow = shallow(<Row data={testRow} y={0} size={150} xStart={0} xEnd={2}/>)
  
  describe("display qualities",()=>{
    it("number of cells matches height",()=>{
      expect(row.find(Cell).length).to.equal(3)
    })
    it("when less data, number of cells matches width",()=>{
      expect(shortRow.find(Cell).length).to.equal(3)
    })
    it("when more data, number of cells matches width",()=>{
      expect(longRow.find(Cell).length).to.equal(3)
    })
  })

})


