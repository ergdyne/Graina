import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../src/App'
import Grid from '../src/components/Grid'

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
    describe("contains a Grid", ()=>{
      const grid = shallow(<App/>).find(Grid)
      it("only one Grid",()=>{
        expect(grid.length).to.equal(1)
      })
      it("has size passed",()=>{
        expect(grid.props().size).to.be.above(0)
      })
      it("has data passed", ()=>{
        expect(grid.props().data.length).to.be.above(0)
      })
    })
  })
})