import React from 'react'
import {grainToRGB, xCoord, yCoord} from './grainImageLib'

//TODO consider generalizing more
export default function grainImage(imageSize, grains){
  const radius = imageSize/(2+2*Math.sqrt(2))
  const circles = grains.map((g,i)=>{
    if(i>3){return ""}
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