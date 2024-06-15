import { getCategories, getCategory, addCategory, updateCategory, archiveCategory, deleteCategory } from "../../models/Category" 

interface Category {
  id: string
  name: string
  id_area: string
  archived: number
}

const queries = { 
  getCategories: async () => await getCategories(),
  getCategory: async (root: any, { id }: Category) => await getCategory(id) 
}

const mutations = {
  addCategory: async (root: any, { name, id_area }: Category) => await addCategory(name, id_area),
  updateCategory: async (root: any, { id, name, id_area, archived }: Category) => await updateCategory(id, name, id_area, archived), 
  archiveCategory: async (root: any, { id }: Category) => await archiveCategory(id),
  deleteCategory: async (root: any, { id }: Category) => await deleteCategory(id)
}

export const resolvers = { queries, mutations }