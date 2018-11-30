import React from 'react'
import Grid from './components/Grid'
import { distance } from './functions/cellData'
import {gridProps} from './functions/gridMath'
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
        clicks:100,
        color:{r:255,g:0,b:255}
      },
      grainCost: 2,
      moveCost: 1,
      gridXSize:5,
      gridYSize:5

    }

    this.updateGrid = this.updateGrid.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  updateGrid(props){
    this.setState({
      xStart:props.xStart,
      xEnd:props.xEnd,
      yStart:props.yStart,
      yEnd:props.yEnd
    })
  }

  updateUser(x,y,changeClicks){
    this.setState({
      user:{
        x: x,
        y: y,
        clicks: (this.state.user.clicks - changeClicks)
      }
    })
    //ehhh this is all hacked together for testing so!
    this.updateGrid(gridProps(this.state.gridXSize,this.state.gridYSize,x,y))
  }
  componentDidUpdate(){
    console.log(this.state.user)
  }

  handleClick(cell){
    //temporary code
    console.log(this.state.user)
    if(cell.x===this.state.user.x && cell.y===this.state.user.y){
      console.log("place grain")
      //requires at least 2 points
      if(this.state.user.clicks>=this.state.grainCost){
        console.log("grain would be placed")
        //place grain

        //and lower user clicks
        this.updateUser(this.state.user.x, this.state.user.y, this.state.grainCost)
      }else{console.log("no grain placed")}
    }else{
      console.log("trying to move")
      const move = distance(this.state.user.x, this.state.user.y,cell)
      if(move*this.state.moveCost <= this.state.user.clicks){
        console.log("move")
        this.updateUser(cell.x,cell.y, move*this.state.moveCost)
      }
    }
    
  }

  componentWillMount(){
    this.setState({data:testGrid()})
    this.setState({size:50})
    this.updateGrid(gridProps(this.state.gridXSize,this.state.gridYSize,this.state.user.x,this.state.user.y))
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