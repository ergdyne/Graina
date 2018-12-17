import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import FontAwesome from 'react-fontawesome'
//import { API_URL } from './config'

export default class OAuth extends Component {
  state = {
      user: {},
      disabled: ''
  }  

  componentDidMount() {
    const { socket, provider, onLogIn} = this.props
    socket.on(provider, user => { 
      console.log("socket response")
      console.log(user) 
      this.popup.close()
      this.setState({user})
      console.log('logging in user')
      onLogIn()
    })

  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: ''})
      }
    }, 1000)
  }

  openPopup() {
    const { provider, socket, apiURL } = this.props
    const width = 600, height = 600
    const left = (window.innerWidth / 2) - (width / 2)
    const top = (window.innerHeight / 2) - (height / 2)
    const url = `${apiURL}/${provider}?socketId=${socket.id}`
    console.log("opening pop up")

    return window.open(url, '',       
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  startAuth = () => {
    console.log("start auth")
    if (!this.state.disabled) {
      this.popup = this.openPopup()  
      this.checkPopup()
      this.setState({disabled: 'disabled'})
    }
  }

  closeCard = () => {
    console.log("close Card")
    this.setState({user: {}})
  }

  render() {
    const loggedIn = this.state.user.loggedIn
    const { provider } = this.props
    
    return (
      <div>
        {loggedIn
          ? <div>       
              <h4>{'The logged in version'}</h4>
            </div>
          : <div >
              <button 
                onClick={this.startAuth}
              >
                {provider}
              </button>
            </div>
        }
      </div>
    )
  }
}

OAuth.propTypes = {
  provider: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired
}