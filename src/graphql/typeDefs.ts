import { gql } from 'apollo-server-express'; 
import { Product } from './products';
import { Category } from './categories';
import { Area } from './areas';

const typeDefs = gql`
  ${Product.types}
  ${Category.types}
  ${Area.types}

  type Query {
    ${Product.queries}
    ${Category.queries}
    ${Area.queries}
  }
  
  type Mutation {
    ${Product.mutations}
    ${Category.mutations}
    ${Area.mutations}
  }
`;

export default typeDefs

