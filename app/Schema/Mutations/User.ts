import { GraphQLID, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users";
import { MessageType } from "../TypeDefs/Messages";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve (parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({ name, username, password })
    return args;
  }
}

export const UPDATE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve (parent: any, args: any) {
    const { id, name, username, oldPassword, newPassword } = args;
    const user = await Users.findOne(id);

    if(!user) throw new Error("User can't found!");

    if(oldPassword === user?.password){
      await Users.update(id , { name, username, password: newPassword})
      return {successful: true, message: "Information updated!"}
    } else {
      throw new Error("Password doesn't match!")
    }
  }
}


export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve (parent: any, args: any) {
    const { id } = args;
    await Users.delete(id);

    return {successful: true, message: "Deleted!"}
  }
}