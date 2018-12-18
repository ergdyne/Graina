function keyNumberToJSON(keyAttribute, numberAttribute, objectArray){
  return (
    JSON.parse(`{${objectArray
      .map(o => `"${o[keyAttribute]}":${o[numberAttribute]}`)
      .join(',')}}`))
}

export {keyNumberToJSON}