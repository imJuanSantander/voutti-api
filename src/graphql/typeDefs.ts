import { gql } from 'apollo-server-express'; 
import { Product } from './products';

const typeDefs = gql`
  ${Product.types}

  type Query {
    ${Product.queries}
  }
  
  type Mutation {
    ${Product.mutations}
  }
`;

export default typeDefs

