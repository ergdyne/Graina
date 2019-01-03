import "@babel/polyfill"
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import https from 'https'
import http from 'http'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import socketio from 'socket.io'
import {passportConfig} from './operations/passportConfig'

//TEMP - different set up from production... not sure what it is yet
const certOptions = (process.env.NODE_ENV !== 'production')?{
  key: fs.readFileSync(path.resolve('./server.key')),
  cert: fs.readFileSync(path.resolve('./server.crt'))
}:{}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

//create the server
const app = express()
const server = (process.env.NODE_ENV !== 'production')?
  https.createServer(certOptions, app):
  http.createServer(app)

app.use(morgan(process.env.NODE_ENV))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())


app.use(cookieParser())
app.use(cors({origin: process.env.CLIENT_ORIGIN,credentials: true}))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

passportConfig()

const io = socketio(server)
app.set('io', io)

//import routes
require('./routes/auth') (app)
require('./routes/routes')(app)

app.get(
  '*',
  (req,res)=>res.status(200).send({
    message: `Welcome to the Graina API! We have no response for ${req}. Did you mean to say 'Ovechkin sucks?'`
  }))

//the or here is different from what env is as a temporary test
const port = parseInt(process.env.PORT,10)||8888
app.set('port', port)

console.log(port)

server.listen(port)