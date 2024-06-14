import connection from "../config/db"
import getId from "../helpers/getId"

interface Product {
  id: string,
  name: string,
  price: number,
  temperature: string,
  description: string,
  id_category: string
}

interface Products extends Product {
  data: Product[]
}

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

const addProduct = async (name: string, price: number, temperature: string, description: string, id_category: number) => {
  const db = await connection()
  const insertSql = 'INSERT INTO products (id, name, price, temperature, description, id_category) VALUES (?, ?, ?, ?, ?, ?)'
  const id = getId()
  const insertValues = [id, name, price, temperature, description, id_category]
  
  try {
    await db.query(insertSql, insertValues)

  } catch (error) {
    throw error
  } 
}

const updateProduct = async (id: string, name: string, price: number, temperature: string, description: string, id_category: number) => {
  const db = await connection()
  const sql = 'UPDATE products SET name = ?, price = ?, temperature = ?, description = ?, id_category = ? WHERE id = ?'
  const values = [name, price, temperature, description, id_category, id]

  try {
    await db.query(sql, values)
  } catch (error) {
    throw error
  }
}

export {
  getProducts,
  addProduct,
  updateProduct
}