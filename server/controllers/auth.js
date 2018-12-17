//Since this is used in a route, we are calling it a controller
export function google(req, res){
  const io = req.app.get('io') 
  io.in(req.session.socketId).emit('google',{loggedIn:true})
  res.end()
}