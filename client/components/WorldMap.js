import React from 'react'
import PropTypes from 'prop-types'
import worldMapImage from '../functions/worldMapImage'
import style from './WorldMap.css'

export default class WorldMap extends React.Component{
  render(){
    return(
      <div 
      className='WorldMap'
      style={{width: this.props.size, height: this.props.size}}
      >
        {worldMapImage(this.props.size,this.props.data)}
      </div>
    )
  }
}

WorldMap.propTypes = {
  size: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
}