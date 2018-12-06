import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import style from './index.css'




ReactDOM.render(
  <App/>, 
  document.getElementById('app')
)
registerServiceWorker();
module.hot.accept()