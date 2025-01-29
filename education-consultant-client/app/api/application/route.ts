import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Application, { IApplication } from "@/models/ApplicationData";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data: IApplication = await req.json();

    const newApplication = new Application(data);
    await newApplication.save();

    return NextResponse.json(
      { message: "Application submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to submit application", error },
      { status: 500 }
    );
  }
}
