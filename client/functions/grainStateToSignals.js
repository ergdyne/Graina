import moment from 'moment'
import sortOn from 'sort-on'
import {distance} from './cellData'

function milliSince(since){
  const now = moment()
  const start = moment(since)
  return moment.duration(now.diff(start)).asMilliseconds()
}

export default function grainStateToSignals(grainState, cell){
  return (
    sortOn(grainState.filter(g=>g.signal !== '')
      .map(g=>({
        distance: distance(g.x,g.y,cell),
        signal:g.signal,
        color:{r:g.r,g:g.g,b:g.b},
        time:milliSince(g.created_at)
      }))
    ,['distance','time'])
  )
}