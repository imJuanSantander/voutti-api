import { getAreas, getArea, addArea, updateArea, archiveArea, deleteArea } from "../../models/Area"

interface Area {
  id: string
  name: string
  archived: number
}

const queries = {
  getArea: async (root: any, { id }: Area) => await getArea(id),
  getAreas: async () => await getAreas()
}

const mutations = {
  addArea: async (root: any, { name }: Area) => await addArea(name),
  updateArea: async (root: any, { id, name, archived }: Area) => await updateArea(id, name, archived),
  archiveArea: async (root: any, { id }: Area) => await archiveArea(id),
  deleteArea: async (root: any, { id }: Area) => deleteArea(id) 
}

export const resolvers = { queries, mutations }

