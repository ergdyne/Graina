export default function rgbToROYGBV(r,g,b){
  if(r>g && r>b){return 'RED'}
  if(g>r && g>b){return 'GREEN'}
  if(b>r && b>g){return 'BLUE'}
  if(r>g && r===b){return 'VIOLET'}
  if(r>b && r===g){return 'YELLOW'}
  if(g>r && g===b){return 'ORANGE'}//Actually it is cyan
  return ''
}