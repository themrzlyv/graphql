import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";


export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    price: { type: GraphQLFloat },
    inStock: { type: GraphQLBoolean },
    category: { type: GraphQLString }
  })
});