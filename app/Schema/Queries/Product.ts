import { GraphQLList } from "graphql";
import { Products } from "../../Entities/Products";
import { ProductType } from "../TypeDefs/Product";

export const  GET_ALL_PRODUCTS = {
  type: new GraphQLList(ProductType),
  resolve () {
    return Products.find();
  }
}