import { addCategory } from "../../models/Category" 

interface Category {
  name: string
  id_area: string
}

const queries = {

}

const mutations = {
  addCategory: async (root: any, { name, id_area }: Category) => await addCategory(name, id_area)   
}

export const resolvers = { queries, mutations }