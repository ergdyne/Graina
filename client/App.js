import React from 'react'
import Grid from './components/Grid'
import { distance, findCell } from './functions/cellData'
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
        clicks:1000,
        color:{r:255,g:0,b:255}
      },
      grainCost: 2,
      moveCost: 1,
      gridXSize:5,
      gridYSize:5

    }

    this.updateGrid = this.updateGrid.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.insertGrain = this.insertGrain.bind(this)
    this.checkData = this.checkData.bind(this)
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
        clicks: (this.state.user.clicks - changeClicks),
        color: this.state.user.color
      }
    })
    //ehhh this is all hacked together for testing so!
    this.updateGrid(gridProps(this.state.gridXSize,this.state.gridYSize,x,y))
  }

  checkData(data){
    //find cells with over 5 grains
    const heavyCells = data.filter(c=> c.grains.length > 4)
    //all have at least 5 grains
    if(heavyCells.length>0){
      //there is at least one such cell
      const cell = heavyCells[0]
      const grains = cell.grains
      //take any excess grains... this mutates the grain
      const newGrains = grains.splice(3,cell.grains.length-4)
      
      //create new cell with it
      const newCell = { x:cell.x,y:cell.y,grains:newGrains}
      //put new cell into the set
      const newSet = data.filter(c=> !(c.x===cell.x && c.y===cell.y)).concat([newCell])
      //send each grain to the right location
      const fullyNewSet =
        this.insertGrain( 
          this.insertGrain(
              this.insertGrain(
                this.insertGrain(newSet,cell.x+1,cell.y,grains[0]
                ),cell.x,cell.y+1,grains[1]
              ),cell.x-1,cell.y,grains[2]
            ),cell.x,cell.y-1,grains[3]
        )
      this.setState({data:fullyNewSet})
    }
  }

  componentDidUpdate(){
    this.checkData(this.state.data)
  }

  insertGrain(data,x,y,grain){
    const cell = findCell(x,y,data)
    const sansCell = data.filter(c=> !(c.x===cell.x && c.y===cell.y))
    const newGrains = () => {
      if(cell.grains.length>0){
        return cell.grains
      }return []}

    const newCell = 
      {
        x:cell.x,y:cell.y,grains:(newGrains().concat([grain]))
      }
    return (sansCell.concat([newCell]))

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
        this.setState({data:(this.insertGrain(this.state.data, cell.x,cell.y,{color:(this.state.user.color)}))})
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