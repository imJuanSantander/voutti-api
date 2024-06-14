import { v4 as uuidv4 } from 'uuid'

const getId = () => {
  const id = uuidv4()
  return id
}

export default getId