import { getProducts, getProduct, addProduct, updateProduct, archiveProduct, deleteProduct } from "../../models/Product"

interface Product {
  id: string
  name: string
  price: number
  temperature: string
  description: string
  id_category: number
  archived: boolean
}

const queries = {
  getProducts: async () => await getProducts(),
  getProduct: async (root: any, { id }: Product) => await getProduct(id) 
}   

const mutations = {
  addProduct: async (root: any, { name, price, temperature, description, id_category }: Product) => await addProduct(name, price, temperature, description, id_category),
  updateProduct: async (root: any, { id, name, price, temperature, description, id_category}: Product) => await updateProduct(id, name, price, temperature, description, id_category),
  deleteProduct: async (root: any, { id }: Product) => deleteProduct(id),
  archiveProduct: async (root: any, { id }: Product) => archiveProduct(id) 
}

export const resolvers = { queries, mutations } 