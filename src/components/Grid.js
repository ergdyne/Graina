import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import grainImage from '../functions/grainImage'

export default class Grid extends React.Component{
  //Grid made of Rows made of Cells
  render(){
    return (
      <div>
        <Row
          size={this.props.size} 
          data={this.props.data}
          xEnd={this.props.xEnd}
          xStart={this.props.xStart}
          y={0}
        />
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