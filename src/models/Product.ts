import connection from "../config/db";


const getProducts = async () => { 
  const db = await connection()
  const sql = 'SELECT * FROM products'
  const [data] = await db.query(sql)
  return data
}

const addProduct = async (name: string) => {
  const db = await connection()
  const sql = 'INSERT INTO products (name) VALUES (?) '
  const values = [name]
  const [data] = await db.query(sql, values)
  return data
}

export {
  getProducts,
  addProduct
}