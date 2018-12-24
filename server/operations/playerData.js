import {player_data} from '../models/models'
import clicksRemaining from './clicksRemaining'

export default function playerData(pkPlayer){
  return new Promise(function (resolve, reject) {
    player_data
    .findOne({where:{pk_player: pkPlayer}})
    .then(p => {
      if(!p){
        reject('player not found')
      }else{
        const player = p.toJSON()
        clicksRemaining(pkPlayer,player.r,player.g,player.b)
        .then(clicks =>{
          player.clicks = clicks
          resolve(player)
        })
      }
    })
    .catch(e => reject(e))
  })
}