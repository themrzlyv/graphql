import { GraphQLBoolean, GraphQLFloat, GraphQLString } from "graphql";
import { Products } from "../../Entities/Products";
import { ProductType } from "../TypeDefs/Product";

export const CREATE_NEW_PRODUCT = {
  type: ProductType,
  args: {
    name: { type: GraphQLString},
    price: { type: GraphQLFloat },
    inStock: { type: GraphQLBoolean },
    category: { type: GraphQLString }
  },
  async resolve (parent: any, args: any) {
    await Products.insert(args);
    return args;
  }
}