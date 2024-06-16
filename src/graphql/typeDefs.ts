import { gql } from 'apollo-server-express'; 
import { Product } from './products';
import { Category } from './categories';
import { Area } from './areas';
import { User } from './users';

const typeDefs = gql`
  ${Product.types}
  ${Category.types}
  ${Area.types}
  ${User.types}

  type Query {
    ${Product.queries}
    ${Category.queries}
    ${Area.queries}
    ${User.queries}
  }
  
  type Mutation {
    ${Product.mutations}
    ${Category.mutations}
    ${Area.mutations}
    ${User.mutations}
  }
`;

export default typeDefs

