import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'
import grainImage from '../functions/grainImage'
import style from './Row.css'

export default class Row extends React.Component{
  //Row made of cells 
  render(){
    //breakable depending on padding...
    const rowWidth = (this.props.size +1)*this.props.data.length
    console.log(rowWidth)
    return (
      <div 
        className='Row'
        style={{width: `${rowWidth}px`}}
      >
        {this.props.data.map((b)=>{
          return(
            <Cell 
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

Row.propTypes = {
  size: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object)
}