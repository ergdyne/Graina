import Sequelize from 'sequelize'
import {grain_state,player_data} from '../models/models'
import {gridProps} from '../../common/functions/gridMath'
import testSettings from '../../common/test_data/testSettings'
const Op = Sequelize.Op

module.exports={
  retrieve(req, res){
    const settings = testSettings()
    const pkPlayer = parseInt(req.session.passport.user)||0
    return player_data
      .findOne({where:{pk_player: pkPlayer}})
      .then(p => {
        const player = p.toJSON()
        const grid = gridProps(settings.grid_size_x,settings.grid_size_y,player.x,player.y)
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
        .catch(e => res.status(400).send(e))
      })
      .catch(e => res.status(400).send(e))
  }
}