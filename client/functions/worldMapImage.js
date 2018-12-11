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

  return(
    <svg 
      witdh={imageSize} height={imageSize} 
      transform={'scale(1, -1)'}
    >
      {pixels}
    </svg>
  )
}


