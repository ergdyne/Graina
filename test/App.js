import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../src/App'

configure({adapter: new Adapter()})

describe("App component testing", ()=>{
  describe("Welcome message", ()=>{
    it("renders welcome message",()=>{
      const wrapper = shallow(<App/>)
      const welcome = <h1 className='App-title'>Welcome to Graina</h1>
      expect(wrapper.contains(welcome)).to.equal(true)
    })
  })

  

})