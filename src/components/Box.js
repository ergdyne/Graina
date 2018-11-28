import React from 'react'
import PropTypes from 'prop-types'
import style from './Box.css'

export default class Box extends React.Component {
  render(){
    return (
      <button 
        className='Box'
        style={{width: this.props.size, height: this.props.size}}
      >
        {this.props.image}
      </button>
    )
  }
}

Box.propTypes = {
  size: PropTypes.number,
  image: PropTypes.element
}