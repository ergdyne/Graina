import passport from 'passport'
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth'
import {auth_google,play, player} from '../models/models'
import randomColor from '../../common/functions/randomColor'

export const passportConfig = () => {
  const googleConfig = {
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'https://localhost:8000/google/callback'
  }
  
  passport.serializeUser((user, cb)=> {
    console.log("serializing user")
    console.log(user)  
    cb(null, user.pkPlayer)
  })
  passport.deserializeUser((pkPlayer, cb)=> {
    console.log("deserializing user")
    console.log(pkPlayer)
    player
    .findOne({where:{pk_player:pkPlayer}})
    .then(p=>cb(null, p))
    
  })

  const callback = (accessToken, refreshToken, profile, cb) => {
    console.log("calling back from google")
    //this is where we will build the player
    auth_google
    .findOne({where:{google_id:profile.id}})
    .then(auth => {
      if(auth){
        //here and below could just send the pk
        const existingPlayer = {pkPlayer:auth.toJSON().fk_player}
        cb(null, existingPlayer)
      }else{
        const color = randomColor()
        player
        .create({r:color.r,g:color.g,b:color.b})
        .then(p =>{
          const pkPlayer = p.toJSON().pk_player
          auth_google
          .create({
            fk_player: pkPlayer,
            google_id: profile.id
          })
          .then(newAuth =>{
            play
            .create({fk_player:pkPlayer,x:0,y:0})
            .then(newPlay =>{ 
              const newPlayer = {pkPlayer:pkPlayer}
              cb(null, newPlayer)
            })
          })
        })
      }
    })

    
  }

  passport.use(new GoogleStrategy(googleConfig, callback))
}