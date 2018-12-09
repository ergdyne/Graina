import React from 'react'
import Grid from './components/Grid'
import { distance} from './functions/cellData'
import {gridProps} from './functions/gridMath'
import style from './App.css'
import logo from './logo.svg'
//TEMP
import grainStateToGrid from './functions/grainStateToGrid'

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
        pk:1,
        x:2,
        y:2,
        clicks:1000
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

  updateGrid(){
    fetch(`/api/grid/${this.state.user.pk}`)
    .then(res => {return res.json()})
    .then(gs=>{
      this.setState({data:grainStateToGrid(gs)})
    })

    const grid = gridProps(this.state.gridXSize, this.state.gridYSize, this.state.user.x,this.state.user.y)
    this.setState({
      xStart:grid.xStart,
      xEnd:grid.xEnd,
      yStart:grid.yStart,
      yEnd:grid.yEnd
    })
  }

  updateUser(){
    fetch(`/api/player_data/${this.state.user.pk}`)
    .then(res => {return res.json()})
    .then(p => { 
      this.setState({
        user:{
          pk:(this.state.user.pk),
          x: p.x,
          y: p.y,
          clicks: (this.state.user.clicks)
        }
      })
      this.updateGrid()
    })
    
  }

  componentDidUpdate(){
    
  }

  handleClick(cell){
    //temporary code
    console.log(this.state.user)
    if(cell.x===this.state.user.x && cell.y===this.state.user.y){
      console.log("place grain")
      if(this.state.user.clicks>=this.state.grainCost){
        console.log("grain would be placed")
      }else{console.log("no grain placed")}
    }else{
      fetch(`/api/play/${this.state.user.pk}`, {
        method: 'POST',
        body: JSON.stringify({
          x: cell.x,
          y: cell.y,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(_ => this.updateUser())
    } 
  }

  componentWillMount(){
    this.updateUser()
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