import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import http from 'http'
//TEMP
import testSettings from '../common/test_data/testSettings'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

console.log(process.env.DEV_FLAGGED)
console.log(testSettings())

const app = express()
app.use(morgan(process.env.NODE_ENV))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//import routes
require('./routes/routes')(app)
app.get(
  '*',
  (req,res)=>res.status(200).send({
    message: `Welcome to the Graina API! We have no response for ${req}. Did you mean to say 'Ovechkin sucks?'`
  }))

//the or here is different from what env is as a temporary test
const port = parseInt(process.env.PORT,10)||8888
app.set('port', port)
const server = http.createServer(app)
server.listen(port)