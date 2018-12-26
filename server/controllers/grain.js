import {grain, grain_location} from '../models/models'
import grainFlow from '../operations/grainFlow'
import playerData from '../operations/playerData'
import settingsJSON from '../operations/settingsJSON'

//TODO do something like transactions or include relationships fully in models
module.exports={
  place(req,res){
    const pkPlayer = parseInt(req.session.passport.user)||0
    playerData(pkPlayer)
    .then(player => {
      settingsJSON()
      .then(settings =>{
        const cellX=parseInt(req.body.x)
        const cellY=parseInt(req.body.y)
        if(player.x!==cellX || player.y!==cellY || player.clicks < settings.GRAIN_COST){
          res.status(409).send(p)
        }else{
          return grain
          .create({
              signal: ((req.body.hasOwnProperty('signal'))?req.body.signal:''),
              fk_player: pkPlayer
          })
          .then(g=>{
            return grain_location
            .create({
                fk_grain: g.toJSON().pk_grain,
                x: cellX,
                y: cellY
            })
            .then(r=>{
              grainFlow(1)
              res.status(201).send(r)
            })
          })
        }
      })
    })
    .catch(e=>res.status(400).send(e))
  }
}
