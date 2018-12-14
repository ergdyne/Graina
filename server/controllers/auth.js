//Since this is used in a route, we are calling it a controller
export function google(req, res){
  const io = req.app.get('io')
  //cookie related...
  console.log("the request to google bit")
  console.log(req.session)
  // const player = {
  //   pkPlayer: req.user.pkPlayer
  // }
  
  io.in(req.session.socketId).emit('google',{loggedIn:true})
  res.end()
}