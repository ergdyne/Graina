import React from 'react'
import PropTypes from 'prop-types'
import style from './UserData.css'

export default class UserData extends React.Component{
  render(){
    const player = this.props.player
    return(
      <div className='UserData'>
        <span>{`(${player.x},${player.y})`}</span>
        <span>{`Clicks Remaining: ${player.clicks}`}</span>
      </div>
    )
  }
}

UserData.propTypes = {
  player: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    clicks: PropTypes.number
  })
}

