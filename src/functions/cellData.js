function findCell(x,y,cells){
  const matches = cells.filter(c => {return(c.x === x && c.y===y)})
  //there is some problem if matches greater than 1
  //TODO Error logging!
  if(matches.length>1){console.log("error at Row")}
  if(matches.length >=1){
    return matches[0]
  }
  return {x:x,y:y,grains:[]}
}

function findRow(y,cells){
  return cells.filter(c=>{return(c.y===y)})
}

export {findCell, findRow}