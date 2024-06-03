import { getProducts, addProduct } from "../../models/Product"

const queries = {
  getProducts: async () => await getProducts()
}   

const mutations = {
  addProduct: async (root: any, { name }: { name: string }) => await addProduct(name)
}

export const resolvers = { queries, mutations } 