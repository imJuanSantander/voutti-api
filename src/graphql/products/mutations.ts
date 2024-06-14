export const mutations = `
  addProduct(name: String!, price: Float!, temperature: String!, description: String!, id_category: Int!): Product!
  updateProduct(id: String!, name: String!, price: Float, temperature: String!, description: String!, id_category: Int): Product!
`