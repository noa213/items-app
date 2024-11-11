import mongoose, { Model, Schema } from "mongoose";
import { ICity } from "@/app/types/city";

const Cities: Schema<ICity> = new Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  population: { type: Number, required: true },
  area: { type: Number, required: true },
});

const City: Model<ICity> =
  mongoose.models.City || mongoose.model<ICity>("city", Cities);

export default City;
