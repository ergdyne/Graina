import {grain, grain_location, player_data} from '../models/models'
import grainFlow from '../operations/grainFlow'
//TODO do something like transactions or include relationships fully in models
module.exports={
  create(req,res){
    const pkPlayer = parseInt(req.params.pk_player)||0
    return player_data
    .findOne({where:{pk_player:pkPlayer}})
    .then(p => {
      const player = p.toJSON()
      const cellX=parseInt(req.body.x)
      const cellY=parseInt(req.body.y)
      if(player.x!==cellX || player.y!==cellY){
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
            res.status(201).send(r)
            grainFlow(1)
          })
        })
      }
    })
    .catch(e=>res.status(400).send(e))
  }
}
