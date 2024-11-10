import connect from "@/app/lib/db/mongo-db";
import Product from "@/app/lib/moduls/product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await Product.find();
    return NextResponse.json({ message: "successfull", data });
  } catch (error) {
    return NextResponse.json("Error in fetching " + error);
  }
}

export async function POST(req: NextResponse) {
  try {
    await connect();
    const { name, category, price, stock } = await req.json();
    const product = new Product({ name, category, price, stock });
    await product.save();
    return NextResponse.json({ newProduct: product });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}

export async function PUT(req: NextResponse) {
  try {
    console.log('gbfs')
    await connect();
    const { id, name, category, price, stock } = await req.json();
    console.log(id)
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, price, stock },
      { new: true }
    );
    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ updatedProduct });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}

export async function DELETE() {
  return NextResponse.json({ meesge: "DELETE" });
}
