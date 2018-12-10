import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Grid from '../../../client/components/Grid'
import Row from '../../../client/components/Row'
import testGrid from '../../../common/test_data/testGrid'

describe("Grid",()=>{
  const grid = 
    shallow(
      <Grid 
        data={testGrid().slice(0,8)} 
        size={150}
        xStart={0}
        xEnd={2}
        yStart={0}
        yEnd={2}
      />
    )

  const longGrid = 
    shallow(
      <Grid 
        data={testGrid()} 
        size={150}
        xStart={0}
        xEnd={2}
        yStart={0}
        yEnd={2}
      />
    )
  const shortGrid = 
    shallow(
      <Grid 
        data={testGrid().slice(0,6)} 
        size={150}
        xStart={0}
        xEnd={2}
        yStart={0}
        yEnd={2}
      />
    )
  describe("display qualities",()=>{
    it("number of rows matches height",()=>{
      expect(grid.find(Row).length).to.equal(3)
    })
    it("when less data, number of rows matches height",()=>{
      expect(shortGrid.find(Row).length).to.equal(3)
    })
    it("when more data, number of rows matches height",()=>{
      expect(longGrid.find(Row).length).to.equal(3)
    })
  })
})