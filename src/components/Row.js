import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'
import findCellData from '../functions/getCellData'
import grainImage from '../functions/grainImage'
import style from './Row.css'

export default class Row extends React.Component{
  //Row made of cells 
  render(){
    //breakable depending on padding...
    const cols = (this.props.xEnd - this.props.xStart + 1)
    const rowWidth = (this.props.size + 1)*cols
    const y = this.props.y
    return (
      <div 
        className='Row'
        style={{width: `${rowWidth}px`}}
      >
        {Array.from({length: cols}, (_, k) => k + this.props.xStart).map((i)=>{
          const cell = findCellData(i,y,this.props.data) 
          return(
            <Cell 
              key={`${cell.x},${cell.y}`}
              x={cell.x}
              y={cell.y}
              size={this.props.size} 
              image={grainImage(this.props.size,cell.grains)}/>
          )
        })
      }
      </div>
    )
  }
}

Row.propTypes = {
  size: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  xStart: PropTypes.number.isRequired,
  xEnd: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}