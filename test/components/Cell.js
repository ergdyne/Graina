import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Cell from '../../src/components/Cell'

describe("Cell", ()=>{
  const cell = shallow(<Cell/>)
  describe("display qualities",()=>{
    it("includes a button",()=>{
      expect(cell.find("button").length).to.equal(1)
    })
  })
})