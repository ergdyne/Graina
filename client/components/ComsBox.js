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
  
  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.send(this.state.signal)
    this.setState({signal:''})
    document.getElementById('ComsBox-form').reset()
  }

  render(){
    const signals = this.props.signals
    return(
      <div className='ComsBox'>
        <form 
          id='ComsBox-form'
          className='ComsBox-send' 
          onSubmit={this.handleSubmit}
        >
          <input 
            className='ComsBox-text'
            type='text' 
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input className='ComsBox-button' type='submit' value='Send'/>
        </form>
        
        <div className='ComsBox-signals'>
          {signals.map((s,i)=>{
            return(<div key={i} style={{color:grainToRGB(s)}}>
              {s.signal}
            </div>)
          })}
        </div>
      </div>
    )
  }
}

ComsBox.propTypes = {
  signals: PropTypes.arrayOf(PropTypes.object)
}