import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import http from 'http'
import {player as playerController} from './controllers/controllers'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

console.log(process.env.DEV_FLAGGED)

const app = express()
app.use(morgan(process.env.NODE_ENV))
app.use(bodyParser.urlencoded({extended:false}))

//import routes
app.get('/api', playerController.create)
app.get(
  '*',
  (req,res)=>res.status(200).send({
    message: `Welcome to the Graina API! We have no response for ${req}. Did you mean to say 'Ovechkin sucks?'`
  }))

const port = parseInt(process.env.PORT,10)||8888
app.set('port', port)
const server = http.createServer(app)
server.listen(port)