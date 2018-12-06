import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Cell from '../../client/components/Cell'

describe("Cell", ()=>{
  const cell = shallow(<Cell size={150} x={0} y={0}/>)
  describe("display qualities",()=>{
    it("includes a button",()=>{
      expect(cell.find("button").length).to.equal(1)
    })
  })
})

//TODO sinon and onclicks