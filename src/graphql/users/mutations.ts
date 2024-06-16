export const mutations = `
  addUser(name: String, admin: Int, phone: String, email: String): ID
  updateUser(id: String!, name: String, admin: Int, phone: String, email: String): ID
  deleteUser(id: String!): ID
`