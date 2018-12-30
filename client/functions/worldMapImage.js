import React from 'react'
export default function worldMapImage(imageSize, data){
  const pixels = 
    data.map((p,i)=>{
    return(<rect
      key={i}
      x={p.x} 
      y={p.y} 
      width={1} 
      height={1} 
      stroke={`rgb(${p.r},${p.g},${p.b})`} 
    />)
  })

  const d = 
    data.reduce((a,c)=>{
      return Math.max(a,c.x,c.y)
    },0)

  return(
    <svg 
      transform={'scale(1, -1)'} 
      viewBox={`0 0 ${d} ${d}`}
      width={imageSize} 
      height={imageSize} 
    >
      <g >
        {pixels}
      </g>
    </svg>
  )
}


