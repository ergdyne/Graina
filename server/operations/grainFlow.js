import {grain_location,move_grain} from '../models/models'
import grainStateToGrid from '../common/functions/grainStateToGrid'

export default function grainFlow(){
  move_grain
    .findAll()
    .then(gs=>{
      if(gs == null || gs.length < 1){return}
      const newLocations = 
        grainStateToGrid(gs.map(g=>g.toJSON()))
        .reduce((a,c) =>{return a.concat(
            [{fk_grain:c.grains[0].fk_grain,x:c.x+1,y:c.y},
            {fk_grain:c.grains[1].fk_grain,x:c.x,y:c.y+1},
            {fk_grain:c.grains[2].fk_grain,x:c.x-1,y:c.y},
            {fk_grain:c.grains[3].fk_grain,x:c.x,y:c.y-1}]
          )},[])
      grain_location
        .bulkCreate(newLocations)
        .then(_=> grainFlow())
    })
    .catch(e=>console.log(e))
}