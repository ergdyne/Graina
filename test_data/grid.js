const testGrains = [
  {color:{r:255,g:0,b:255}},
  {color:{r:0,g:0,b:255}},
  {color:{r:0,g:255,b:0}},
  {color:{r:255,g:0,b:0}}
]
const grid = [
  {x:0,y:0,grains:testGrains},
  {x:1,y:0,grains:testGrains},
  {x:0,y:1,grains:testGrains},
  {x:1,y:1,grains:testGrains}
]

export default function testGrid(){
  return grid
}