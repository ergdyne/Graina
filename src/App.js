import React from 'react'
import Grid from './components/Grid'
import style from './App.css'
import logo from './logo.svg'
import testGrid from '../test_data/testGrid'

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      size:100
    }
  }
  componentDidMount(){
    this.setState({data:testGrid()})
    this.setState({size:150})
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Graina</h1>
        </header>
        <Grid size={this.state.size} data={this.state.data}/>
      </div>
    )
  }
}