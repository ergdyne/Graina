import moment from 'moment'
import sequelize from 'sequelize'
import settingsJSON from './settingsJSON'
import {play, grain} from '../models/models'
import rgbToROYGBV from '../../common/functions/rgbToROYGBV'
const Op = sequelize.Op

export default function clicksRemaining(pkPlayer, r, g, b){
  return new Promise(function (resolve, reject){
    settingsJSON()
      .then(settings =>{
        const color = rgbToROYGBV(r,g,b)
        if(color ===''){throw 'color not found'}
        const maxClicks = settings[color]
        const since = moment().subtract(settings.COOL_DOWN).toDate()
        play.count({where:{created_at:{[Op.gte]:since}}})
        .then(plays => {
          grain.count({where:{created_at:{[Op.gte]:since}}})
          .then(grains => {
            const left = maxClicks - grains*settings.GRAIN_COST - plays*settings.MOVE_COST
            resolve(left>0?left:0)
          })
        })
      })
      .catch(e => reject(e))
  })
}