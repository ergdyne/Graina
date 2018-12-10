function range(length,start,spacing){
  return Array.from(
    {length: length}, (_, k) => k*spacing + start)
}

function rangeLength(start, end){
  return (end - start + 1)
}

export{range, rangeLength}