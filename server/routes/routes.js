//Holds all routes... if over 10 routes, think about breaking up
import {
  grain as grainController,
  grid as gridController,
  play as playController,
  playerData as playerDataController,
  worldMap as worldMapController
} from '../controllers/controllers'

module.exports = (app) => {
  app.get('/api/grid/:pk_player', gridController.getRange)
  
  app.post('/api/grain/:pk_player', grainController.create)

  app.post('/api/play/:pk_player',playController.make)

  app.get('/api/player_data/:pk_player', playerDataController.retrieve)

  app.get('/api/world_map/', worldMapController.retrieve)
}