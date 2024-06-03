export const mutations = `
  addProduct(name: String!): Product!
  updateProduct(id: String!, description: String!, temperature: String!, price: Float, id_category: Int!): Product!
  deleteProduct(id: String!): Product!
`