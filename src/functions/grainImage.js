import React from 'react'

function grainToRGB(grain){
  return `rgb(${grain.color.r},${grain.color.g},${grain.color.b})`
}

function xCord(i){
  if(i===0||i===1){return 1}
  if(i===2||i===3){return 3}
  return 2
}

function yCord(i){
  if(i===0||i===3){return 1}
  if(i===1||i===2){return 3}
  return 2
}

export default function grainImage(imageSize, grains){
  const radius = imageSize/4
  console.log(grains)
  const circles = grains.map((g,i)=>{
    return(
      <circle
        key={i} 
        cx={xCord(i)*radius}
        cy={yCord(i)*radius}
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