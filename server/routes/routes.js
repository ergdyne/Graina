//Holds all routes... if over 10 routes, think about breaking up
import {
  grain as grainController,
  grid as gridController,
  play as playController,
  playerData as playerDataController,
  setting as settingController,
  worldMap as worldMapController
} from '../controllers/controllers'

module.exports = (app) => {

  app.get('/api/local_map/', gridController.retrieve)
  
  app.post('/api/place_grain/', grainController.place)

  app.post('/api/move_player/',playController.make)

  app.get('/api/player_data/', playerDataController.retrieve)

  app.get('api/setting/', settingController.retrieve)

  app.get('/api/world_map/', worldMapController.retrieve)
}