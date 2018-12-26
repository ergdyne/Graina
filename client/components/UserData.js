import React from 'react'
import PropTypes from 'prop-types'
import style from './UserData.css'

export default class UserData extends React.Component{
  render(){
    const player = this.props.player
    return(
      <div className='UserData'>
        {`Clicks Remaining (${player.x}, ${player.y}): ${player.clicks}`}
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

