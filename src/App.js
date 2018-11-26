import React from 'react'
import Grid from './components/Grid'
import logo from './logo.svg'
import './App.css'


const testGrains = [
    {color:{r:255,g:0,b:255}},
    {color:{r:0,g:0,b:255}},
    {color:{r:0,g:255,b:0}},
    {color:{r:255,g:0,b:0}}
  ]
  const testGrid = [
    {x:0,y:0,grains:testGrains},
    {x:1,y:0,grains:testGrains},
    {x:0,y:1,grains:testGrains},
    {x:1,y:1,grains:testGrains}
  ]
  
  function rGB(){
    return Math.floor(Math.random() * 3) + 1
  }
  
  export default class App extends React.Component {
    constructor(){
      super()
      this.state={
        data:[]
      }
    }
    componentDidMount(){
      this.setState({data:testGrid})
    }
    render() {
      const size = 200
      return (
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to Graina</h1>
          </header>
          <Grid size={size} data={this.state.data}/>
        </div>
      )
    }
  }