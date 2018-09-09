import React from 'react';
import logo from './logo.svg';
import './App.css';

function rGB(){
  return Math.floor(Math.random() * 3) + 1
}

class Box extends React.Component {
  constructor(){
    super()
    this.state={
      r:0,
      g:0,
      b:10
    }
  }
  //
  handleClick(){
    switch(rGB()){
      case 1: {
        if(this.state.r < 245)
          {this.setState({r:this.state.r + 10})} 
        else{this.setState({r:0})}
          break
        }
      case 2: {
        if(this.state.g < 245)
          {this.setState({g:this.state.g + 10})} 
        else{this.setState({g:0})}
          break
        }
      default: {
        if(this.state.g < 245)
          {this.setState({b:this.state.b + 10})} 
        else{this.setState({b:0})}
          break
        }
    }
  }

  render(){
    const buttonStyle={
      background: `rgb(${this.state.r},${this.state.g},${this.state.r})`
    }


    return (
      <button className='Grid-box'
      style={buttonStyle}
      onClick={()=> this.handleClick()}
      
      >{`${this.state.r},${this.state.g},${this.state.r}`}</button>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Graina</h1>
        </header>
        <Box/>

      </div>
    );
  }
}

export default App;
