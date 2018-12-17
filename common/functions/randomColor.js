export default function randomColor(){
  //the goal is to generate a color that is roygbv and a litle light or dark
  const x = Math.floor(Math.random()*131+125)
  const y = Math.floor(Math.random()*x/2)

  switch(Math.floor(Math.random())*6){
    case 0: return ({r:x,g:y,b:y})
    case 1: return ({r:y,g:x,b:y})
    case 2: return ({r:y,g:y,b:x})
    case 3: return ({r:x,g:x,b:y})
    case 4: return ({r:y,g:x,b:x})
    case 5: return ({r:x,g:y,b:x})
    default: return ({r:x,g:x,b:x})
  }
}