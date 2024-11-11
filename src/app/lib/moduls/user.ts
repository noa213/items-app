import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "@/app/types/user";

const Users: Schema<IUser> = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("user", Users);

export default User;
