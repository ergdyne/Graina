import {play} from '../models/models'
import playerData from '../operations/playerData'
import settingsJSON from '../operations/settingsJSON'

module.exports={
  make(req, res){
    const pkPlayer = parseInt(req.session.passport.user)||0
    playerData(pkPlayer)
    .then(player => {
      settingsJSON()
      .then(settings =>{
        const x = parseInt(req.body.x)
        const y = parseInt(req.body.y)
        if(
          isNaN(x) || 
          isNaN(y) || 
          player.clicks < settings.MOVE_COST ||
          (player.x === x && player.y === y)
        ){
          res.status(409).send(p)
        }else{
          return play
          .create({
            fk_player:pkPlayer,
            x:x,
            y:y
          })
          .then(r =>{
            res.status(201).send(r)
          })
        }
      })
    })
    .catch(e => res.status(400).send(e))
  }
}
