import {player_data} from '../models/models'

module.exports={
  retrieve(req, res){
    const pkPlayer = (!req.session.passport)?0:(parseInt(req.session.passport.user) || 0)
    return player_data
      .findOne({
        where:{
          pk_player: pkPlayer
        }
      })
      .then(p => {
        if(!p){res.status(401).send(null)
        }else{res.status(200).send(p)}
      })
      .catch(e => res.status(400).send(e))
  }
}
