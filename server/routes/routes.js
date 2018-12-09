//TEMP holding all
import {
  playerData as playerDataController,
  grid as gridController
} from '../controllers/controllers'

module.exports = (app) => {
  app.get('/api/player_data/:pk_player', playerDataController.retrieve)

  app.get('/api/grid/:pk_player', gridController.getRange)
}