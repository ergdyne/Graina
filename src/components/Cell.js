import React from 'react'
import PropTypes from 'prop-types'
import style from './Cell.css'

export default class Cell extends React.Component {
  render(){
    return (
      <button
        onClick={()=>this.props.click()}
        className='Cell'
        style={{width: this.props.size, height: this.props.size}}
      >
        {this.props.image}
      </button>
    )
  }
}

Cell.propTypes = {
  size: PropTypes.number.isRequired,
  image: PropTypes.element,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}