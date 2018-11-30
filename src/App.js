import React from 'react'
import Grid from './components/Grid'
import style from './App.css'
import logo from './logo.svg'
import testGrid from '../test_data/testGrid'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data:[],
      size:100,
      //will auto configure based on user location and settings
      xStart:0,
      xEnd:4,
      yStart:0,
      yEnd:4,
      //load from db...
      user:{
        x:2,
        y:2,
        clicks:10
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(cell){
    //temporary code
    console.log(this.state)
    console.log(cell)
    if(cell.x===this.state.user.x && cell.y===this.state.user.y){
      console.log("place grain")
    }else{
      console.log("move")
    }
  }

  componentDidMount(){
    this.setState({data:testGrid()})
    this.setState({size:50})
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Graina</h1>
        </header>
        <Grid 
          size={this.state.size} 
          data={this.state.data}
          xStart={this.state.xStart}
          xEnd={this.state.xEnd}
          yStart={this.state.yStart}
          yEnd={this.state.yEnd}
          click={this.handleClick}
        />
      </div>
    )
  }
}