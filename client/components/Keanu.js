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

  miniGrains = () =>{
    console.log('in the mini')
    const makeGrains = function(acc, countDown){
      if(countDown>0){
        return makeGrains(acc.concat([{color:randomColor()}]),countDown-1)
      }
      return acc
    }

    const madeGrains = makeGrains([],Math.floor(Math.random()*37))
    
    return (
      madeGrains.map((g,i) =>{
        const miniSize = (Math.ceil(Math.random()*10) + 10)/100
        const xCoord = Math.floor(Math.random()*301)
        const yCoord = Math.floor(Math.random()*301)
        const miniType = Math.floor(Math.random()*4)

        console.log(miniSize)

        return(
          <g 
            className={'Mini-holder'}
            key={i}
            transform={`translate(${xCoord},${yCoord})`}
          >
            <g 
              className={'Mini-scale'}
              transform={`scale(${miniSize},${miniSize})`}
            >
              <g className={`Mini-symbol-${miniType}`}>
                <ellipse 
                  cx="0" 
                  cy="0" 
                  rx="100" 
                  ry="40" 
                  style={{fillOpacity:0, stroke:grainToRGB(g), strokeWidth:10}} 
                  transform="rotate(120)"
                />
                <ellipse 
                  cx="0" 
                  cy="0" 
                  rx="100" 
                  ry="40" 
                  style={{fillOpacity:0, stroke:grainToRGB(g), strokeWidth:10}} 
                  transform="rotate(60)"
                />
                <ellipse 
                  cx="0" 
                  cy="0" 
                  rx="100" 
                  ry="40" 
                  style={{fillOpacity:0, stroke:grainToRGB(g), strokeWidth:10}} 
                />
                <circle 
                  cx="0" 
                  cy="0" 
                  r="20" 
                  style={{fill:grainToRGB(g)}}
                />
              </g>
            </g>
          </g>
        )
      })
    )
  }
  
  render(){
    
    return (
      <div className='Keanu'>
        <svg className='Keanu-image' height={768} width={768} viewBox="0 0 300 300">
          {this.miniGrains()}
          <g 
            className='Keanu-grain'
            transform={`translate(${this.state.radius},${this.state.radius})`}
          >
            <g className={`Keanu-symbol`}>
              <ellipse 
                className={`Keanu-ellipse-120`}
                cx="0" 
                cy="0" 
                rx="100" 
                ry="40" 
                style={{fillOpacity:0, stroke:grainToRGB(this.state.grain), strokeWidth:10}} 
                transform="rotate(120)"
              />
              <ellipse 
                className={`Keanu-ellipse-60`}
                cx="0" 
                cy="0" 
                rx="100" 
                ry="40" 
                style={{fillOpacity:0, stroke:grainToRGB(this.state.grain), strokeWidth:10}} 
                transform="rotate(60)"
              />
              <ellipse 
                className={`Keanu-ellipse-0`}
                cx="0" 
                cy="0" 
                rx="100" 
                ry="40" 
                style={{fillOpacity:0, stroke:grainToRGB(this.state.grain), strokeWidth:10}} 
              />
              <circle 
                className={`Keanu-center`}
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