import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../src/App'

configure({adapter: new Adapter()})

describe("App component testing", ()=>{
  
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
    //for example purpose only
    it("renders welcome message",()=>{
      const wrapper = shallow(<App/>)
      const welcome = <h1 className='App-title'>Welcome to Graina</h1>
      expect(wrapper.contains(welcome)).to.equal(true)
    })
  })
  
    

  

})