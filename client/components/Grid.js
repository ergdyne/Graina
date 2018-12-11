import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import {range, rangeLength } from '../functions/rangeLib'
import { findRow } from '../functions/cellData'
import style from './Grid.css'

export default class Grid extends React.Component{
  //Grid made of Rows made of Cells
  render(){
    const start = this.props.yStart

    return (
      <div className='Grid'>
        {range(rangeLength(start, this.props.yEnd),start,1).reverse()
          .map((row)=>{
            return(
              <Row
                key={`${row}`}
                size={this.props.size} 
                data={findRow(row,this.props.data)}
                xEnd={this.props.xEnd}
                xStart={this.props.xStart}
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
  xStart: PropTypes.number.isRequired,
  xEnd: PropTypes.number.isRequired,
  yStart: PropTypes.number.isRequired,
  yEnd: PropTypes.number.isRequired
}