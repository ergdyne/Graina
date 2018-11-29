import React from 'react'
import PropTypes from 'prop-types'
import style from './Cell.css'

export default class Cell extends React.Component {
  render(){
    return (
      <button 
        className='Cell'
        style={{width: this.props.size, height: this.props.size}}
      >
        {this.props.image}
      </button>
    )
  }
}

Cell.propTypes = {
  size: PropTypes.number,
  image: PropTypes.element
}