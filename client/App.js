import React from 'react'
import io from 'socket.io-client'
import Grid from './components/Grid'
import UserData from './components/UserData'
import WorldMap from './components/WorldMap'
import ComsBox from './components/ComsBox'
import Keanu from './components/Keanu'
import OAuth from './components/OAuth'
import {gridProps} from '../server/common/functions/gridMath'
import style from './App.css'
import logo from './logo.svg'
import grainStateToGrid from '../server/common/functions/grainStateToGrid'
import grainStateToSignals from './functions/grainStateToSignals'
const apiURL = 'https://localhost:8000'
const socket = io(apiURL)

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      player:null,
      data:[],
      gridProps:{},
      settings:{},
      signals:[],
      size:100,
      worldMapData:[]
    }
  }

  handleClick = (cell) =>{
    if(cell.x===this.state.player.x && cell.y===this.state.player.y){
      this.sendGrain('')
    }else{
      if(this.state.player.clicks >= this.state.settings.MOVE_COST){
        fetch(`${apiURL}/api/move_player/`, {
          method: 'POST',
          body: JSON.stringify({
            x: cell.x,
            y: cell.y,
          }),
          credentials: 'include',
          headers: {'Accept': 'application/json','Content-Type': 'application/json'}
        })
        .then(_ => {
          this.updateGrid()
          this.updatePlayer()
        })
      }//TODO feedback
    } 
  }

  loadSettings = () =>{
    fetch(`${apiURL}/api/settings`)
    .then(res => {return res.json()})
    .then(s => this.setState({settings:s}))
  }

  logIn = () =>{
    this.updateGrid()
    this.updatePlayer()
    this.updateWorldMap()
    //These forceupdates does not fix the loading issues, so it might be something with lifecycle
    this.forceUpdate()
    setTimeout(()=>this.forceUpdate(),500)
    setTimeout(()=>this.forceUpdate(),1000)
    setTimeout(()=>this.forceUpdate(),1500)
  }

  logOut = () =>{
    fetch(`${apiURL}/api/logout`,{credentials: 'include'})
    .then(res=>{
      this.setState({
        player:null,
        data:[],
        gridProps:{},
        settings:{},
        signals:[],
        size:100,
        worldMapData:[]
      })
    })
  }

  sendGrain = (signal) =>{
    if(this.state.player.clicks >= this.state.settings.GRAIN_COST){
      fetch(`${apiURL}/api/place_grain/`, {
        method: 'POST',
        body: JSON.stringify({
          x: this.state.player.x,
          y: this.state.player.y,
          signal: signal
        }),
        credentials: 'include',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'}
      })
      .then(_ =>{ 
        this.updateGrid()
        this.updatePlayer()
        this.updateWorldMap()
        
      })
    }//TODO - send the user some feedback eh?
  }

  //The actual fix is probably to make this whole thing an async
  updateGrid = () =>{
    fetch(`${apiURL}/api/local_map/`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(gs => {
      const {x,y} = this.state.player
      this.setState({signals:grainStateToSignals(gs,{x:x,y:y})})
      this.setState({data:grainStateToGrid(gs)})
      const {GRID_SIZE_X, GRID_SIZE_Y} = this.state.settings
      this.setState({gridProps:gridProps(GRID_SIZE_X, GRID_SIZE_Y, x, y)})
    })
  }

  updatePlayer = () =>{
    fetch(`${apiURL}/api/player_data/`,{credentials: 'include'})
    .then(res => {
      if(res.status === 401){return null}
      return res.json()
    })
    .then(player => { 
      if(player){
        this.setState({player:player})
        this.updateGrid()
        if(this.state.worldMapData.length <1){
          this.updateWorldMap()
        }
      }
    })
  }

  updateWorldMap = () =>{
    fetch(`${apiURL}/api/world_map`,{credentials: 'include'})
    .then(res => {return res.json()})
    .then(m => {
      this.setState({worldMapData:m})
      this.forceUpdate()
    })
  }

  componentWillMount(){
    this.loadSettings()
    this.updateGrid()
    this.updatePlayer()
    if(this.state.player){
      this.updateWorldMap()
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='App-intro'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Graina</h1>
          </div>
          <div className='App-clear'></div>
          <div className='App-account'>
            {!this.state.player
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
                <UserData player={this.state.player}/>
                <button className='App-logout' onClick={()=>this.logOut()}>{'Logout'}</button>
              </div>
            }
          </div>
        </header>
        <div className='App-body'>
          {!this.state.player
            ? <div>
              <Keanu/>
            </div>
            : <div>
              
              {/* because of passing the size, sometimes these don't load right away... */}
              <Grid 
                size={this.state.size} 
                data={this.state.data}
                settings={this.state.settings}
                gridProps={this.state.gridProps}
                click={this.handleClick}
              />
              <div className='App-info'>
                <ComsBox 
                  signals={this.state.signals} 
                  send={this.sendGrain}
                />
                <WorldMap
                  size={261}
                  data={this.state.worldMapData}
                />
              </div>
            </div>
          }
        </div>
        <footer className='App-footer'>
          <div>Inspired by <a href='https://youtu.be/1MtEUErz7Gg'>Numberphile Sandpiles</a></div>
          <div>Source code at <a href='https://github.com/ergdyne/Graina'>github/ergdyne/Graina</a></div>
          <div>If you would like to see this website continue, contact on github or <a href='mailto:graina@ergdyne.com'>email</a>.</div>
        </footer>
      </div>
    )
  }
}