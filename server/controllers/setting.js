import {current_settings} from '../models/models'

module.exports={
  retrieve(req, res){
    console.log("settings document")
    return current_settings
      .findAll()
      .then(cs =>{
        const settings = 
          JSON.parse(`{${cs
            .map(c=>c.toJSON())
            .map(cv =>`"${cv.name}":${cv.quantity}`)
            .join(',')}}`)
        res.status(200).send(settings)
      })
      .catch(e => res.status(400).send(e))
  }
}
