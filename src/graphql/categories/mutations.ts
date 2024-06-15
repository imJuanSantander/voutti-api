export const mutations = `
  addCategory(name: String!, id_area: String!): ID
  updateCategory(id: String!, name: String, id_area: String, archived: Int): ID
  archiveCategory(id: String!): ID
  deleteCategory(id: String!): ID
`