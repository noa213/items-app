import connect from "@/app/lib/db/mongo-db";
import User from "@/app/lib/moduls/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const data = await User.find();
    return NextResponse.json({ message: "successfull", data });
  } catch (error) {
    return NextResponse.json("Error in fetching " + error);
  }
}

export async function POST(req: NextResponse) {
  try {
    await connect();
    const { UserName, password, email } = await req.json();
    const user = new User({ UserName, password, email });
    await user.save();
    return NextResponse.json({ newUser: user });
  } catch (error) {
    return NextResponse.json({ message: "Error: " + error }, { status: 500 });
  }
}

