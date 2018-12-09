export default function grainStateToGrid(grainState){
  const coords = 
    grainState.reduce((accumulator, currentValue, currentIndex, array) => 
    {
      if(accumulator.some(i=>i.x===currentValue.x && i.y===currentValue.y)){return accumulator}
      return accumulator.concat([{x:currentValue.x,y:currentValue.y}])
    }, [])

  const grid = coords.map(c=>({
    x:c.x,
    y:c.y,
    grains:(grainState.filter(g=>g.x===c.x&&g.y===c.y).map(g=>({color:{r:g.r,g:g.g,b:g.b}})))
  }))
  return grid
}