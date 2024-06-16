import { Product } from "./products"
import { Category } from "./categories"
import { Area } from "./areas"
import { User } from "./users"

const resolvers = {
  Query: {
    ...Product.resolvers.queries,
    ...Category.resolvers.queries,
    ...Area.resolvers.queries,
    ...User.resolvers.queries,
  },

  Mutation: {
    ...Product.resolvers.mutations,
    ...Category.resolvers.mutations,
    ...Area.resolvers.mutations,
    ...User.resolvers.mutations,
  }
}

export default resolvers