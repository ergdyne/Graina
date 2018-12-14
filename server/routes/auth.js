import passport from 'passport'
//TODO change to standard
import {google} from '../controllers/auth'

module.exports = (app) => {
  const googleAuth = passport.authenticate('google', {scope:['profile']})

  app.get('/google/callback', googleAuth, google)

  app.use((req, res, next)=>{
    req.session.socketId = req.query.socketId
    next()
  })

  app.get('/google', googleAuth)
}