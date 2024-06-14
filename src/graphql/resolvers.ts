import { Product } from "./products"
import { Category } from "./categories"
import { Area } from "./areas"

const resolvers = {
  Query: {
    ...Product.resolvers.queries,
    ...Category.resolvers.queries,
    ...Area.resolvers.queries,
  },

  Mutation: {
    ...Product.resolvers.mutations,
    ...Category.resolvers.mutations,
    ...Area.resolvers.mutations,
  }
}

export default resolvers