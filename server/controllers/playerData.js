import playerData from '../operations/playerData'

module.exports={
  async retrieve(req, res){
    const pkPlayer = (!req.session.passport)?0:(parseInt(req.session.passport.user) || 0)
    try {
      const p = await playerData(pkPlayer)
      return res.status(200).send(p)
    }
    catch (e) {
      return res.status(400).send(e)
    }
  },
  logout(req,res){
    req.session.destroy(() =>{
      res.status(200).send({message:'logged out'})
    })
  }
}
