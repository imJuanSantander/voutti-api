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
  const [data] = await db.query(sql)
  return data
}

const addProduct = async (name: string, price: number, temperature: string, description: string, id_category: number) => {
  const db = await connection()
  const insertSql = 'INSERT INTO products (id, name, price, temperature, description, id_category) VALUES (?, ?, ?, ?, ?, ?)'
  const id = getId()
  const insertValues = [id, name, price, temperature, description, id_category]
  
  try {
    await db.query(insertSql, insertValues)

    const selectSql = 'SELECT * FROM products WHERE id = ?'
    const [data]: any = await db.query(selectSql, [id])
    return data[0] 
  } catch (error) {
    throw error
  } 
}

const updateProduct = async (name: string, price: number, temperature: string, description: string, id_category: number) => {

}

export {
  getProducts,
  addProduct
}