function gridProps(gridXSize,gridYSize,userX,userY){
  //for now assume odd, but with round should work regardless
  function startEnd(size,coord){
    const delta = Math.round((size-1)/2)
    const start = coord - delta
    const end = start + size - 1
    return {start:start, end:end}
  }

  const xComp = startEnd(gridXSize,userX)
  const yComp = startEnd(gridYSize,userY)
  
  return ({xStart:xComp.start,
      xEnd:xComp.end,
      yStart:yComp.start,
      yEnd:yComp.end
  })
}

export {gridProps}