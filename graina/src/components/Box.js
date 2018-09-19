import React from 'react'
import './Box.css'


  
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
  
