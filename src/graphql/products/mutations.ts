export const mutations = `
  addProduct(name: String!, price: Float!, temperature: String!, description: String!, id_category: String!): ID
  updateProduct(id: String!, name: String, price: Float, temperature: String, description: String, id_category: String): ID
  archiveProduct(id: String!): ID
  deleteProduct(id: String!): ID
`