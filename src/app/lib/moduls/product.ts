import mongoose, { Model, Schema } from "mongoose";
import { IProduct } from "@/app/types/product";

const Products: Schema<IProduct> = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("product", Products);

export default Product;
