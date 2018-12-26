import Sequelize from 'sequelize'
import {grain_state,player_data, current_settings} from '../models/models'
import {gridProps} from '../../common/functions/gridMath'
import {keyNumberToJSON} from '../../common/functions/ergJSON'
const Op = Sequelize.Op

module.exports={
  retrieve(req, res){
    const pkPlayer = parseInt(req.session.passport.user)||0
    return player_data
      .findOne({where:{pk_player: pkPlayer}})
      .then(p => {
        const player = p.toJSON()
        return current_settings
          .findAll()
          .then(cs =>{
            const settings = keyNumberToJSON("name","quantity",cs.map(c=>c.toJSON()))
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