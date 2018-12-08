//TEMP holding all
import {playerData as playerDataController} from '../controllers/controllers'

module.exports = (app) => {
  app.get('/api/player_data/:pk_player', playerDataController.retrieve)

}