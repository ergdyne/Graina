import {expect} from 'chai'
import {gridProps} from '../../src/functions/gridMath'

describe("gridMath", ()=>{
  describe("gridProps works as expected", ()=>{
    it("when odd size returns true center",()=>{
      const props = gridProps(5,5,2,2)
      const expected = {
        xStart:0,
        xEnd:4,
        yStart:0,
        yEnd:4
      }
      expect(props).to.eql(expected)
    })
  })
})