import testGrains from './testGrains'

const grid = [
  {x:0,y:0,grains:testGrains()},
  {x:1,y:0,grains:testGrains()},
  {x:2,y:0,grains:testGrains()},
  {x:0,y:1,grains:testGrains()},
  {x:1,y:1,grains:testGrains()},
  {x:2,y:1,grains:testGrains()},
  {x:0,y:2,grains:testGrains()},
  {x:2,y:2,grains:testGrains()},
  {x:0,y:3,grains:testGrains()},
  {x:1,y:3,grains:testGrains()},
  {x:2,y:3,grains:testGrains()}
]

export default function testGrid(){
  return grid
}