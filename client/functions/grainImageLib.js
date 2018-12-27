//missing type safety...
function grainToRGB(grain){
  return `rgb(${grain.color.r},${grain.color.g},${grain.color.b})`
}

//for the centers of the grain images based on the diamond shape
function xCoord(i){
  if(i===0){return (1+2*Math.sqrt(2))}
  if(i===2){return 1}
  return (1+Math.sqrt(2))
}
  
function yCoord(i){
  if(i===1){return 1}
  if(i===3){return (1+2*Math.sqrt(2))}
  return (1+Math.sqrt(2))
}

export {grainToRGB, xCoord, yCoord}