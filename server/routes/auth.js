import passport from 'passport'
//TODO change to standard
import {google} from '../controllers/auth'

module.exports = (app) => {
  const googleAuth = passport.authenticate('google', {scope:['profile']})

  app.get('/google/callback', googleAuth, google)
 

  //This section is just about passing the socket id for io
  app.use((req, res, next)=>{
    console.log("setting socket id")
    console.log("request.query")
    console.log(req.query)
    console.log("req.session")
    console.log(req.session)
    req.session.socketId = req.query.socketId
    //req.session.save()
    console.log(req.session.socketId)
    console.log(req.sessionID)
    next()
  })

  app.get('/google', googleAuth)
}