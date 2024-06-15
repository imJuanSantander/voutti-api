import { connect } from "http2"
import connection from "../config/db"
import getId from "../helpers/getId"

const getCategories = async () => {
  const db = await connection()
  const sql = 'SELECT * FROM categories'
  
  try {
    const [data] = await db.query(sql)
    return data
  } catch (error) {
    throw error
  }
}

const getCategory = async (id: string) => {
  const db = await connection()
  const sql = 'SELECT * FROM categories WHERE id = ?'
  const values = [id]

  try {
    const [data]: any = await db.query(sql, values)
    return data[0]
  } catch (error) {
    throw error
  }
}

const addCategory = async (name: string, id_area: string) => {
  const db = await connection()
  const sql = 'INSERT INTO categories VALUES (?, ?, ?, ?)'
  const id = getId()
  const archived = 0
  const values = [id, name, id_area, archived]  

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const updateCategory = async (id: string, name: string, id_area: string, archived: number) => {
  const db = await connection()
  const sql = 'UPDATE categories SET name = ?, id_area = ?, archived = ? WHERE id = ?'
  const values = [name, id_area, archived, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const archiveCategory = async (id: string) => {
  const db = await connection()
  const sql = 'UPDATE categories SET archived = ? WHERE id = ?'
  const archived = 1
  const values = [archived, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const deleteCategory = async (id: string) => {
  const db = await connection()
  const sql = 'DELETE FROM categories WHERE id = ?'
  const values = [id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  } 
}

export {
  getCategories, getCategory, addCategory, updateCategory, archiveCategory, deleteCategory
}