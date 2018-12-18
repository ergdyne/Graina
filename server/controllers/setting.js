import {current_settings} from '../models/models'
import {keyNumberToJSON} from '../../common/functions/ergJSON'

module.exports={
  retrieve(req, res){
    return current_settings
      .findAll()
      .then(cs =>{
        const settings = keyNumberToJSON("name","quantity",cs.map(c=>c.toJSON()))
        res.status(200).send(settings)
      })
      .catch(e => res.status(400).send(e))
  }
}