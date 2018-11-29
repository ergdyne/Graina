import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'
import grainImage from '../functions/grainImage'

export default class Grid extends React.Component{
  //Grid made of Rows made of Cells
  render(){
    return (
      <div>
        <Row size={this.props.size} data={this.props.data}/>
      </div>
    )
  }
}

Grid.propTypes = {
  size: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object)
}