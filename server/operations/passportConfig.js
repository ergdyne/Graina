import passport from 'passport'
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth'

export const passportConfig = () => {
  const googleConfig = {
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'https://localhost:8000/google/callback'
  }
  
  passport.serializeUser((user, cb)=> cb(null, user))
  passport.deserializeUser((obj, cb)=> cb(null, obj))

  const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile)

  passport.use(new GoogleStrategy(googleConfig, callback))
}