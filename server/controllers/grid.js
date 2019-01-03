import Sequelize from 'sequelize'
import {grain_state} from '../models/models'
import playerData from '../operations/playerData'
import settingsJSON from '../operations/settingsJSON'
import {gridProps} from '../common/functions/gridMath'
const Op = Sequelize.Op

module.exports={
  retrieve(req, res){
    const pkPlayer = parseInt(req.session.passport.user)||0
    playerData(pkPlayer)
    .then(player => {
      settingsJSON()
      .then(settings =>{
        const grid = gridProps(settings.GRID_SIZE_X,settings.GRID_SIZE_Y,player.x,player.y)
        return grain_state
        .findAll({
          where:{
            x:{[Op.and]:{
              [Op.gte]:grid.xStart,
              [Op.lte]:grid.xEnd
            }},
            y:{[Op.and]:{
              [Op.gte]:grid.yStart,
              [Op.lte]:grid.yEnd
            }},
          }
        })
        .then(gs => res.status(200).send(gs))
      })
    })
    .catch(e => res.status(400).send(e))
  }
}