import {player_data} from '../models/models'

export default function playerData(pkPlayer){
  return new Promise(function (resolve, reject) {
    player_data
    .findOne({where:{pk_player: pkPlayer}})
    .then(p => {
      if(!p){
        reject('player not found')
      }else{
        resolve(p)
      }
    })
    .catch(e => reject(e))
  })
}