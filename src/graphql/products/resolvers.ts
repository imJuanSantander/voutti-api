import { getProducts, addProduct, updateProduct } from "../../models/Product"

interface Product {
  id: string
  name: string
  price: number
  temperature: string
  description: string
  id_category: number
}

const queries = {
  getProducts: async () => await getProducts()
}   

const mutations = {
  addProduct: async (root: any, { name, price, temperature, description, id_category }: Product) => await addProduct(name, price, temperature, description, id_category),
  updateProduct: async (root: any, { id, name, price, temperature, description, id_category}: Product) => await updateProduct(id, name, price, temperature, description, id_category)
}

export const resolvers = { queries, mutations } 