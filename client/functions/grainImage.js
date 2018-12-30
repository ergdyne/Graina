import React from 'react'
import {grainToRGB, xCoord, yCoord} from './grainImageLib'

//TODO consider generalizing more
export default function grainImage(imageSize, grains){
  const radius = 507/(2+2*Math.sqrt(2))
  const symbols = grains.map((g,i)=>{
    if(i>3){return ""}
    return(
      <g 
        key={i}
        transform={`translate(${xCoord(i)*radius},${yCoord(i)*radius})`}
      >
        <g className={`Cell-symbol-${i}`}>
          <ellipse 
            cx="0" 
            cy="0" 
            rx="100" 
            ry="40" 
            style={{fillOpacity:0, stroke:grainToRGB(g), strokeWidth:10}} 
            transform="rotate(120)"
          />
          <ellipse 
            cx="0" 
            cy="0" 
            rx="100" 
            ry="40" 
            style={{fillOpacity:0, stroke:grainToRGB(g), strokeWidth:10}} 
            transform="rotate(60)"
          />
          <ellipse 
            cx="0" 
            cy="0" 
            rx="100" 
            ry="40" 
            style={{fillOpacity:0, stroke:grainToRGB(g), strokeWidth:10}} 
          />
          <circle 
            cx="0" 
            cy="0" 
            r="20" 
            style={{fill:grainToRGB(g)}}
          />
        </g>
      </g>
    )
  })

  return(
    <svg viewBox="0 0 507 507" width={imageSize} height={imageSize}>
      {symbols}
    </svg>
  )

}