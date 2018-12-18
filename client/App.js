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
      size:75,
      loggedIn:false,
      worldMapData:[],
      player:{},
      gridProps:{},
      settings:{}
    }
  }

  updateWorldMap = () =>{
    //TODO this should probably only happen sometimes...
    fetch(`${apiURL}/api/world_map`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(m=> {
      this.setState({worldMapData:m})
      this.forceUpdate()
    })
  }

  updateGrid = () =>{
    fetch(`${apiURL}/api/local_map/`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(gs=>{
      this.setState({data:grainStateToGrid(gs)})
      const {GRID_SIZE_X, GRID_SIZE_Y} = this.state.settings
      const {x, y} = this.state.player
      this.setState({
        gridProps:gridProps(GRID_SIZE_X, GRID_SIZE_Y, x, y)
      })
    })
  }

  loadSettings = () =>{
    fetch(`${apiURL}/api/setting`)
    .then(res => {return res.json()})
    .then(s => this.setState({settings:s}))
  }

  logIn = () =>{
    this.updatePlayer()
    this.updateWorldMap()
  }

  updatePlayer = () =>{
    fetch(`${apiURL}/api/player_data/`,{credentials: 'include'})
    .then(res => {
      if(res.status === 401){return null}
      return res.json()})
    .then(p => { 
      if(p){
        this.setState({loggedIn:true})
        this.setState({player:p})
        this.updateGrid()
        if(this.state.worldMapData.length <1){
          this.updateWorldMap()
        }
      }
    })
  }

  handleClick = (cell) =>{
    if(cell.x===this.state.player.x && cell.y===this.state.player.y){
      fetch(`${apiURL}/api/place_grain/`, {
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
      .then(_ =>{ 
        this.updateWorldMap()
        this.updatePlayer()
      })
    }else{
      fetch(`${apiURL}/api/move_player/`, {
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
      .then(_ => this.updatePlayer())
    } 
  }

  componentWillMount(){
    this.loadSettings()
    //well do a fetch to check with server?
    this.updatePlayer()
    if(this.state.loggedIn){
      this.updateWorldMap()
    }
  }

  render() {
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
                settings={this.state.settings}
                gridProps={this.state.gridProps}
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