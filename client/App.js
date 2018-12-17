import React from 'react'
import io from 'socket.io-client'
import Grid from './components/Grid'
import WorldMap from './components/WorldMap'
import OAuth from './components/OAuth'
import {gridProps} from '../common/functions/gridMath'
import style from './App.css'
import logo from './logo.svg'
//TEMP
import grainStateToGrid from '../common/functions/grainStateToGrid'
const apiURL = 'https://localhost:8000'
const socket = io(apiURL)

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data:[],
      gridXSize:5,
      gridYSize:5,
      size:75,
      loggedIn:false,
      user:{
        pk:1,
        x:2,
        y:2
      },
      worldMapData:[],
      xStart:0,
      xEnd:4,
      yStart:0,
      yEnd:4
    }


    this.handleClick = this.handleClick.bind(this)
    this.updateGrid = this.updateGrid.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.updateWorldMap = this.updateWorldMap.bind(this)
  }

  updateWorldMap(){
    fetch(`${apiURL}/api/world_map`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(m=> this.setState({worldMapData:m}))
  }

  updateGrid(){
    fetch(`${apiURL}/api/grid/`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(gs=>{this.setState({data:grainStateToGrid(gs)})})

    const grid = gridProps(this.state.gridXSize, this.state.gridYSize, this.state.user.x,this.state.user.y)
    this.setState({
      xStart:grid.xStart,
      xEnd:grid.xEnd,
      yStart:grid.yStart,
      yEnd:grid.yEnd
    })
  }

  logIn = () =>{
    console.log('logIn triggered')
    this.setState({loggedIn:true})
    this.updateUser()
    this.updateWorldMap()
    this.forceUpdate()
  }
  updateUser(){
    fetch(`${apiURL}/api/player_data/`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(p => { 
      this.setState({
        user:{
          pk:(this.state.user.pk),
          x: p.x,
          y: p.y
        }
      })
      this.updateGrid()
    })

    console.log(this.state.user)
  }

  handleClick(cell){
    //temporary code
    console.log(this.state.user)
    if(cell.x===this.state.user.x && cell.y===this.state.user.y){
      console.log("place grain")
      fetch(`${apiURL}/api/grain/`, {
        method: 'POST',
        body: JSON.stringify({
          x: cell.x,
          y: cell.y,
        }),
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(_ => this.updateUser())
    }else{
      console.log('move')
      fetch(`${apiURL}/api/play/`, {
        method: 'POST',
        body: JSON.stringify({
          x: cell.x,
          y: cell.y,
        }),
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(_ => this.updateUser())
    } 
  }

  componentWillMount(){
    //well do a fetch to check with server?
    if(this.state.loggedIn){
      this.updateUser()
      this.updateWorldMap()
    }
  }



  render() {
    console.log('loggedin:' + this.state.loggedIn)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Graina</h1>
        </header>
        <div className='App-body'>
          {!this.state.loggedIn
            ? <div>
              <OAuth 
                onLogIn={this.logIn}
                provider={'google'}
                key={'google'}
                apiURL={apiURL}
                socket={socket}
              />
            </div>
            : <div>
              <Grid 
                size={this.state.size} 
                data={this.state.data}
                xStart={this.state.xStart}
                xEnd={this.state.xEnd}
                yStart={this.state.yStart}
                yEnd={this.state.yEnd}
                click={this.handleClick}
              />
              <WorldMap data={this.state.worldMapData}/>
            </div>
          }
        </div> 
      </div>
    )
  }
}