import { getProducts, addProduct } from "../../models/Product"

interface Product {
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
  // updateProduct: async (root: any, { name, price, temperature, description, id_category}: Product) => await updateProduct(name, price, temperature, description, id_category)
}

export const resolvers = { queries, mutations } 