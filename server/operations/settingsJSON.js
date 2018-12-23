import {current_settings} from '../models/models'
import {keyNumberToJSON} from '../../common/functions/ergJSON'

export default function settingsJSON(){
  return new Promise(function (resolve, reject){
    current_settings
    .findAll()
    .then(cs=>{
      resolve(keyNumberToJSON("name","quantity",cs.map(c=>c.toJSON())))
    })
    .catch(e => reject(e))
  })
}