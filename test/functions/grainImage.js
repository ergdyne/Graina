import {expect} from 'chai'
import React from 'react'
import {grainToRGB, xCoord, yCoord} from '../../src/functions/grainImageLib'
import grainImage from '../../src/functions/grainImage'

describe("Grain Image", ()=>{
  describe("grainToRGB", ()=>{
    it("should return an rgb(r,g,b) tag as string",()=>{
      const grain = {color:{r:255,g:0,b:255}}
      const expected = 'rgb(255,0,255)'
      expect(grainToRGB(grain)).to.equal(expected)
    })
  })

  

})
