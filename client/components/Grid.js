import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import {range, rangeLength } from '../functions/rangeLib'
import { findRow } from '../functions/cellData'
import style from './Grid.css'

export default class Grid extends React.Component{
  //Grid made of Rows made of Cells
  render(){
    const start = this.props.gridProps.yStart

    return (
      <div className='Grid'>
        {range(rangeLength(start, this.props.gridProps.yEnd),start,1).reverse()
          .map((row)=>{
            return(
              <Row
                key={`${row}`}
                size={this.props.size} 
                data={findRow(row,this.props.data)}
                xEnd={this.props.gridProps.xEnd}
                xStart={this.props.gridProps.xStart}
                y={row}
                click={this.props.click}
              />
            )
          })
        }
      </div>
    )
  }
}

Grid.propTypes = {
  size: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  gridProps: PropTypes.shape({ 
    xEnd: PropTypes.number, 
    xStart: PropTypes.number,
    yEnd: PropTypes.number, 
    yStart: PropTypes.number  
  })
}