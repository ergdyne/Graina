import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {grainToRGB, xCoord, yCoord} from '../../src/functions/grainImageLib'
import grainImage from '../../src/functions/grainImage'

//intentionally too many grains
const testGrains = [
  {color:{r:255,g:0,b:255}},
  {color:{r:0,g:0,b:255}},
  {color:{r:0,g:255,b:0}},
  {color:{r:255,g:0,b:0}},
  {color:{r:255,g:0,b:0}}
]

describe("Grain Image", ()=>{
  describe("functions work as expected", ()=>{
    it("grainToRGB transcribes grain to rgb string",()=>{
      const grain = {color:{r:255,g:0,b:255}}
      const expected = 'rgb(255,0,255)'
      expect(grainToRGB(grain)).to.equal(expected)
    })
    //coord items are somewhat trivial
  })

  describe("grainImage returns expected image",()=>{
    const image = shallow(grainImage(200,testGrains))
    it("returns a single svg",()=>{
      expect(image.find("svg").length).to.equal(1)
    })
    it("returns 4 grains",()=>{
      expect(image.find("circle").length).to.equal(4)
    })
  })

})