import connect from "@/app/lib/db/mongo-db";
import City from "@/app/lib/moduls/city";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await City.find();
    return NextResponse.json({ message: "successfull", data });
  } catch (error) {
    return NextResponse.json("Error in fetching " + error);
  }
}

export async function POST(req: NextResponse) {
  try {
    await connect();
    const { name, country, population, area } = await req.json();
    const city = new City({ name, country, population, area });
    await city.save();
    return NextResponse.json({ newCity: city });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}

