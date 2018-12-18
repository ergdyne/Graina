import {current_settings} from '../models/models'

module.exports={
  retrieve(req, res){
    console.log("settings document")
    return current_settings
      .findAll()
      .then(cs =>{
        console.log(cs)
        console.log("hello")
        res.status(200).send({message: "heyhey"})
      })
      .catch(e => res.status(400).send(e))
  }
}
