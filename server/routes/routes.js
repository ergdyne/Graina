//TEMP holding all
import {
  grid as gridController,
  play as playController,
  playerData as playerDataController
} from '../controllers/controllers'

module.exports = (app) => {
  app.get('/api/player_data/:pk_player', playerDataController.retrieve)

  app.get('/api/grid/:pk_player', gridController.getRange)

  app.post('/api/play/:pk_player',playController.make)
}