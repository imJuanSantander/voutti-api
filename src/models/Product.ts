import { connect } from "http2"
import connection from "../config/db"
import getId from "../helpers/getId"

const getProducts = async () => { 
  const db = await connection()
  const sql = 'SELECT * FROM products'

  try {
    const [data] = await db.query(sql)
    return data
  } catch (error) {
    throw error
  }
}

const getProduct = async (id: string) => {
  const db = await connection()
  const sql = 'SELECT * FROM products WHERE id = ?'
  const values = [id]

  try {
    const [data]: any = await db.query(sql, values) 
    return data[0]
  } catch (error) {
    throw error
  }
}

const addProduct = async (name: string, price: number, temperature: string, description: string, id_category: number) => {
  const db = await connection()
  const insertSql = 'INSERT INTO products (id, name, price, temperature, description, id_category, archived) VALUES (?, ?, ?, ?, ?, ?, ?)'
  const id = getId()
  const archived = 0
  const insertValues = [id, name, price, temperature, description, id_category, archived]
  
  try {
    await db.query(insertSql, insertValues)

  } catch (error) {
    throw error
  } 
}

const updateProduct = async (id: string, name: string, price: number, temperature: string, description: string, id_category: number, archived: number) => {
  const db = await connection()
  const sql = 'UPDATE products SET name = ?, price = ?, temperature = ?, description = ?, id_category = ?, archived = ? WHERE id = ?'
  const values = [name, price, temperature, description, id_category, archived, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

const archiveProduct = async (id: string) => {
  const db = await connection()
  const sql = 'UPDATE products SET archived = ? WHERE id = ?' // Set archived from false to true in sql
  const archived = 1
  const values = [archived, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  } 
}

const deleteProduct = async (id: string) => {
  const db = await connection()
  const sql = 'DELETE FROM products WHERE id = ?'
  const values = [id]
  
  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

export {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  archiveProduct,
  deleteProduct
}