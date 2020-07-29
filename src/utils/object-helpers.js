export let updateObjectInArray = (items, itemId, objPropName, newObProps) => {
  return  items.map(u => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObProps}
    }
    return u
  })
}
