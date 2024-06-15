import connection from "../config/db"
import getId from "../helpers/getId"

const getAreas = async () => {
  const db = await connection()
  const sql = 'SELECT * FROM areas'
  
  try {
    const [data] = await db.query(sql)
    return data
  } catch (error) {
    throw error
  }
}

const getArea = async (id: string) => {
  const db = await connection()
  const sql = 'SELECT * FROM areas WHERE id = ?'  
  const values = [id]

  try {
    const [data]: any = await db.query(sql, values)
    return data[0]
  } catch (error) {
    throw error
  }
}

const addArea = async (name: string) => {
  const db = await connection()
  const sql = 'INSERT INTO areas VALUES (?, ?, ?)'
  const id = getId()
  const archived = 0
  const values = [id, name, archived]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const updateArea = async (id: string, name: string, archived: number) => {
  const db = await connection()
  const sql = 'UPDATE areas SET name = ?, archived = ? WHERE id = ?'
  const values = [name, archived, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const archiveArea = async (id: string) => {
  const db = await connection()
  const sql = 'UPDATE areas SET archived = ? WHERE id = ?'
  const archived = 1
  const values = [archived, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }  
}

const deleteArea = async (id: string) => {
  const db = await connection()
  const sql = 'DELETE FROM areas WHERE id = ?'
  const values = [id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  } 
}

export {
  getAreas,
  getArea,
  addArea,
  updateArea,
  archiveArea,
  deleteArea

}