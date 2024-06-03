import { gql } from 'apollo-server-express'

export const types = `
  type Product {
    id: String!
    name: String!
    description: String!
    temperature: String!
    price: Float!
    id_category: Int!
  }
`;
