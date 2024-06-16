import getId from "../helpers/getId"
import connection from "../config/db"

const getUsers = async () => {
  const db = await connection()
  const sql = 'SELECT * FROM users'
  
  try {
    const [data] = await db.query(sql)
    return data
  } catch (error) {
    throw error
  }
}

const getUser = async (id: string) => {
  const db = await connection()
  const sql = 'SELECT * FROM users WHERE id = ?'
  const values = [id]
  
  try {
    const [data]: any = await db.query(sql, values)
    return data[0]
  } catch (error) {
    throw error
  }
}

const addUser = async (name: string, admin: number, phone: string, email: string) => {
  const db = await connection()
  const sql = 'INSERT INTO users (id, name, admin, phone, email) VALUES (?, ?, ?, ?, ?)'
  const id = getId()
  const values = [id, name, admin, phone, email]
  
  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const updateUser = async (id: string, name: string, admin: number, phone: string, email: string) => {
  const db = await connection()
  const sql = 'UPDATE users SET name = ?, admin = ?, phone = ?, email = ? WHERE id = ?'
  const values = [name, admin, phone, email, id]
  
  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (id: string) => {
  const db = await connection()
  const sql = 'DELETE FROM users WHERE id = ?'
  const values = [id]
  
  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

export {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
}