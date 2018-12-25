import React from 'react'
import PropTypes from 'prop-types'
import {grainToRGB} from '../functions/grainImageLib'
import style from './ComsBox.css'

export default class ComsBox extends React.Component{
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
        <div className='ComsBox-Send'>
          {'This is where we are going to chat'}
        </div>
      </div>
    )
  }
}

