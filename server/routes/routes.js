import {
  grain as grainController,
  grid as gridController,
  play as playController,
  playerData as playerDataController,
  settings as settingsController,
  worldMap as worldMapController
} from '../controllers/controllers'

module.exports = (app) => {

  app.get('/api/local_map/', gridController.retrieve)

  app.post('/api/move_player/',playController.make)
  
  app.post('/api/place_grain/', grainController.place)

  app.get('/api/player_data/', playerDataController.retrieve)

  app.get('/api/settings/', settingsController.retrieve)

  app.get('/api/world_map/', worldMapController.retrieve)

  app.get('api/logout',function(req,res){
    req.logout()
    res.status(200).send({message:'logged out'})
  })
}