import passport from 'passport'
import {google} from '../controllers/auth'

module.exports = (app) => {
  const googleAuth = passport.authenticate('google', {scope:['profile']})

  app.get('/api/google/callback', googleAuth, google)
 
  //This section is just about passing the socket id for io
  app.use((req, res, next)=>{
    req.session.socketId = req.query.socketId
    next()
  })

  app.get('/api/google', googleAuth)
}