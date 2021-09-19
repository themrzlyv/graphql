import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_NEW_PRODUCT } from "./Mutations/Product";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
import { GET_ALL_PRODUCTS } from "./Queries/Product";
import { GET_ALL_USERS } from "./Queries/User";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllProducts: GET_ALL_PRODUCTS
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
    createNewProduct: CREATE_NEW_PRODUCT
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})