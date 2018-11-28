import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import grainImage from '../functions/grainImage'

export default class Grid extends React.Component{
  //Grid made of Rows made of Boxes
  render(){
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

Grid.propTypes = {
  size: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object)
}