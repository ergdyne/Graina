function gridProps(gridXSize,gridYSize,playerX,playerY){
  //for now assume odd, but with round should work regardless
  function startEnd(size,coord){
    const delta = Math.round((size-1)/2)
    const start = coord - delta
    const end = start + size - 1
    return {start:start, end:end}
  }

  const xComp = startEnd(gridXSize,playerX)
  const yComp = startEnd(gridYSize,playerY)
  
  return ({xStart:xComp.start,
      xEnd:xComp.end,
      yStart:yComp.start,
      yEnd:yComp.end
  })
}

export {gridProps}