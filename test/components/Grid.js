import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Grid from '../../src/components/Grid'
import Row from '../../src/components/Row'
import testGrid from '../../test_data/testGrid'

describe("Grid",()=>{
  const grid = 
    shallow(
      <Grid 
        data={testGrid()} 
        size={150}
        xStart={0}
        xEnd={3}
        yStart={0}
        yEnd={3}
      />
    )
    it("blank",() => {expect(1).to.equal(1)})
})

//Grid takes in data and size(better name?)
//determines number of rows (unique y)
//determines number of columns
//row should probaby have a set number of columns