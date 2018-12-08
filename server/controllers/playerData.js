import {player_data} from '../models/models'

module.exports={
  retrieve(req, res){
    return player_data
      .findOne({
        where:{
          pk_player: parseInt(req.params.pk_player) || 0
        }
      })
      .then(p => res.status(200).send(p))
      .catch(e => res.status(400).send(e))
  }
}
