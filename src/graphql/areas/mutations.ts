export const mutations = `
  addArea(name: String!): ID
  updateArea(id: String!, name: String, archived: Int): ID
  archiveArea(id: String!): ID
  deleteArea(id: String!): ID
`