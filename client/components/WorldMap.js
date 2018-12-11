import React from 'react'
import worldMapImage from '../functions/worldMapImage'
import style from './WorldMap.css'

export default class WorldMap extends React.Component{
  render(){
    return(
      <div className='WorldMap'>{worldMapImage(420,this.props.data)}</div>
    )
  }
}