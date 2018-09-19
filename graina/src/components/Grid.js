import React from 'react'
import Box from './Box'
import grainImage from '../functions/grainImage'

export default class Grid extends React.Component{
  //Grid made of Rows made of Boxes
  render(){
    console.log(this.props.data)
    return (
      <div>
        {this.props.data.map((b)=>{
          return(
            <Box 
              key={`${b.x},${b.y}`}
              size={this.props.size} 
              image={grainImage(this.props.size,b.grains)}/>
          )
        })
      }

      </div>
      
    )
  }
}