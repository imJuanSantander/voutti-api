import { getUsers, getUser, addUser, updateUser, deleteUser } from "../../models/User"

interface User {
  id: string
  name: string
  admin: number
  phone: string
  email: string
}

const queries = {
  getUsers: async () => await getUsers(), 
  getUser: async (root: any, { id }: User) => await getUser(id),
}

const mutations = {
  addUser: async (root: any, { name, admin, phone, email }: User) => await addUser(name, admin, phone, email),
  updateUser: async (root: any, { id, name, admin, phone, email }: User) => await updateUser(id, name, admin, phone, email),  
  deleteUser: async (root: any, { id }: User) => await deleteUser(id),
}

export const resolvers = { queries, mutations}