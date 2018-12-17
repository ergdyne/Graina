//Since this is used in a route, we are calling it a controller
export function google(req, res){
  const io = req.app.get('io')
  //cookie related...
  console.log("inside the /google path")
  console.log(req.session)
  
  
  io.in(req.session.socketId).emit('google',{loggedIn:true})
  res.end()
}