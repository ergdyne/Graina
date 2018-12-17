import {play, player_data} from '../models/models'

module.exports={
  make(req, res){
    return player_data
      .findOne({
        where:{
          pk_player: parseInt(req.session.passport.user) || 0
        }
      })
      .then(p => {
        const x = parseInt(req.body.x)
        const y = parseInt(req.body.y)
        if(isNaN(x)||isNaN(y)){
          //and other reasons why this is not good
          res.status(409).send(p)
        }else{
          return play
          .create({
            fk_player:p.pk_player,
            x:x,
            y:y
          })
          .then(_ =>{
            //get updated player_data
            return player_data
            .findOne({
              where:{
                pk_player: parseInt(req.session.passport.user) || 0
              }
            })
            .then(pd =>{
              res.status(201).send(pd)})
          })//do I need each catch?
        }
      })
      .catch(e => res.status(400).send(e))
  }
}
