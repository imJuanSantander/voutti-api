import { addArea } from "../../models/Area"

interface Area {
  name: string
}

const queries = {

}

const mutations = {
  addArea: async (root: any, { name }: Area) => await addArea(name)
}

export const resolvers = { queries, mutations }

