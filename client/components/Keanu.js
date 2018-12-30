import React from 'react'
import randomColor from '../../common/functions/randomColor'
import {grainToRGB} from '../functions/grainImageLib'
import stye from './Keanu.css'

export default class Keanu extends React.Component{
  constructor(){
    super()
    this.state = {
      grain:{color:randomColor()},
      radius:150
    }
  }
  
  render(){
    
    return (
      <div className='Keanu'>
        <svg className='Keanu-image' height={768} width={768} viewBox="0 0 300 300">
          <g 
            className='Keanu-grain'
            transform={`translate(${this.state.radius},${this.state.radius})`}
          >
            <g className={`Keanu-symbol`}>
              <ellipse 
                cx="0" 
                cy="0" 
                rx="100" 
                ry="40" 
                style={{fillOpacity:0, stroke:grainToRGB(this.state.grain), strokeWidth:10}} 
                transform="rotate(120)"
              />
              <ellipse 
                cx="0" 
                cy="0" 
                rx="100" 
                ry="40" 
                style={{fillOpacity:0, stroke:grainToRGB(this.state.grain), strokeWidth:10}} 
                transform="rotate(60)"
              />
              <ellipse 
                cx="0" 
                cy="0" 
                rx="100" 
                ry="40" 
                style={{fillOpacity:0, stroke:grainToRGB(this.state.grain), strokeWidth:10}} 
              />
              <circle 
                cx="0" 
                cy="0" 
                r="20" 
                style={{fill:grainToRGB(this.state.grain)}}
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}