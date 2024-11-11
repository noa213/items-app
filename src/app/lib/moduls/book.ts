import mongoose, { Model, Schema } from "mongoose";
import { IBook } from "@/app/types/book";

const Books: Schema<IBook> = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  ageGroup: { type: String, required: true },
  publicationYear: { type: Number, required: true },
});

const Book: Model<IBook> =
  mongoose.models.Book || mongoose.model<IBook>("product", Books);

export default Book;
