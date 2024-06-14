import connection from "../config/db"
import getId from "../helpers/getId"

const addCategory = async (name: string, id_area: string) => {
  const db = await connection()
  const sql = 'INSERT INTO categories VALUES (?, ?, ?)'
  const id = getId()
  const values = [id, name, id_area]  

  try {
    await db.query(sql, values)
  } catch (error) {
    
  }
}

export {
  addCategory
}