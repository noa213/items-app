import connect from "@/app/lib/db/mongo-db";
import Product from "@/app/lib/moduls/product";
import { NextResponse } from "next/server";

export async function PUT(
  req: NextResponse,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const { id } = params;
    const { name, category, price, stock } = await req.json();
    console.log(id);
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

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const { id } = params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: " + (error as Error).message },
      { status: 500 }
    );
  }
}
