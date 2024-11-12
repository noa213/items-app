import axios from "axios";
import { IUser } from "../types/user";

// export const getUsers = async (): Promise<IUser[]> => {
//     return (await axios.get("https://dummyjson.com/users")).data.users;
//   };

export const getUserByEmail = async (email: string) => {
  return (await axios.get(`https://localhost:3000/users/${email}`)).data;
};

export const addUser = async (user: IUser) => {
  return await axios.post("https://localhost:3000/users", {
    user,
  });
};
