import React from 'react'
import ReactDOM from 'react-dom'

const title = 'A Nothing App, Really'

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
)

module.hot.accept()