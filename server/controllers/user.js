import {User} from '../models/models'

module.exports={
  create (req, res){
  return User
    .create({
      r:255,
      g:0,
      b:0
    })
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send(err))
  }
}

