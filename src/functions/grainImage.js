import React from 'react'
import {grainToRGB, xCoord, yCoord} from './grainImageLib'

export default function grainImage(imageSize, grains){
  const radius = imageSize/(2+2*Math.sqrt(2))
  console.log(grains)
  const circles = grains.map((g,i)=>{
    return(
      <circle
        key={i} 
        cx={xCoord(i)*radius}
        cy={yCoord(i)*radius}
        r={i>3 ? 1:radius}
        fill={grainToRGB(g)}
      />
    )
  })

  return(
    <svg witdh={imageSize} height={imageSize}>
      {circles}
    </svg>
  )

}