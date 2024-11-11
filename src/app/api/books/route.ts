import connect from "@/app/lib/db/mongo-db";
import Book from "@/app/lib/moduls/book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Book.find();
    return NextResponse.json({ message: "successfull", data });
  } catch (error) {
    return NextResponse.json("Error in fetching " + error);
  }
}

export async function POST(req: NextResponse) {
  try {
    await connect();
    const { title, author, ageGroup, publicationYear } = await req.json();
    const book = new Book({ title, author, ageGroup, publicationYear });
    await book.save();
    return NextResponse.json({ newBook: book });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}

