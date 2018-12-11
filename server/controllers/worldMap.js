import {world_map_420} from '../models/models'

module.exports={
  retrieve(_,res){
    return world_map_420
    .findAll()
    .then(m => res.status(200).send(m))
    .catch(e => res.status(400).send(e))
  }
}