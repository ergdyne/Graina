import {player_data} from '../models/models'

module.exports={
  retrieve(req, res){
    console.log('request for player data and session:')
    console.log(req.session)
    console.log(res.header)
    return player_data
      .findOne({
        where:{
          pk_player: parseInt(req.session.passport.user) || 0
        }
      })
      .then(p => res.status(200).send(p))
      .catch(e => res.status(400).send(e))
  }
}
