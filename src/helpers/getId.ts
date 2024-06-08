const getId = () => {
  const id = Math.round(Date.now() * 3.141516 + 27405)
  const result = id.toString() 
  console.log(result)
  return result
}

export default getId