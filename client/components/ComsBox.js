import React from 'react'
import PropTypes from 'prop-types'
import {grainToRGB} from '../functions/grainImageLib'
import style from './ComsBox.css'

export default class ComsBox extends React.Component{
  constructor(){
    super()
    this.state ={signal:''}
  }

  handleChange = (event) =>{
    this.setState({signal:event.target.value})
  }
  
  render(){
    const signals = this.props.signals
    return(
      <div className='ComsBox'>
        <div className='ComsBox-Signals'>
          {signals.map((s,i)=>{
            return(<div key={i} style={{color:grainToRGB(s)}}>
              {s.signal}
            </div>)
          })}
        </div>
        <hr/>
        <form 
          className='ComsBox-Send' 
          onSubmit={()=>this.props.send(this.state.signal)}
        >
          <input 
            type='text' 
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type='submit' value='Send'/>
        </form>
      </div>
    )
  }
}

