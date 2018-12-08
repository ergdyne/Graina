import {player} from '../models/models'

module.exports={
  create (req, res){
    return player
      .create({
        r:255,
        g:0,
        b:0
      })
      .then(u => res.status(201).send(u))
      .catch(e => res.status(400).send(e))
  }
}

