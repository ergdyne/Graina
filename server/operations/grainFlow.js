import {grain_location, grain_state,oldest_fifth_grain} from '../models/models'

export default function grainFlow(){
  oldest_fifth_grain
    .findAll()
    .then(c=>{
      console.log("checking g")
      //maybe rearrange this to test later
      if(c == null || c[0]==null){return}
      const cell = c[0].toJSON()
      console.log(`(${cell.x},${cell.y})`)
      //so get the grains
      grain_state
        .findAll({
          where:{x:cell.x,y:cell.y},
          order:[['last_date','ASC']]
        })
        .then(gs=>{
          const ngs = gs
            .slice(0,4)
            .map(g=>g.toJSON())
            .map(g=>({fk_grain:g.pk_grain,x:g.x,y:g.y}))
          const newLocations = [
            {fk_grain:ngs[0].fk_grain,x:ngs[0].x+1,y:ngs[0].y},
            {fk_grain:ngs[1].fk_grain,x:ngs[1].x,y:ngs[1].y+1},
            {fk_grain:ngs[2].fk_grain,x:ngs[2].x-1,y:ngs[2].y},
            {fk_grain:ngs[3].fk_grain,x:ngs[3].x,y:ngs[3].y-1}
          ]
          grain_location
            .bulkCreate(newLocations)
            .then(_=> grainFlow())
        })
    })
    .catch(e=>console.log(e))
}