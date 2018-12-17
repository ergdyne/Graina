import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../../client/App'
import Grid from '../../client/components/Grid'

configure({adapter: new Adapter()})

describe("App component", ()=>{
  it("renders a div", ()=>{
    const divs = shallow(<App/>).find("div")
    expect(divs.length).to.be.above(0)
  })
  describe("the main div", ()=>{
    it("contains everything else that gets rendered", ()=>{
      const divs = shallow(<App/>).find("div")
      const wrappingDiv = divs.first()
      expect(wrappingDiv.children().length).to.equal(shallow(<App/>).children().length)
    })
    //Something like... A test to see if the logo file loads doesn't work out as the method of loading is built into webpack config
    it("has a header", ()=>{
      const header = shallow(<App/>).find("header")
      expect(header.length).to.equal(1)
    })
  
  })
})