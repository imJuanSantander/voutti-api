import connection from "../config/db"
import getId from "../helpers/getId"

const addArea = async (name: string) => {
  const db = await connection()
  const id = getId()
  const sql = 'INSERT INTO areas VALUES (?, ?)'
  const values = [id, name]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

export {
  addArea
}