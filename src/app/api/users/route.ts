import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: users.length,
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get Users Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch users.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const { firebaseUid, fullName, email, role } = body;

    if (!firebaseUid || !fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ firebaseUid });

    if (existingUser) {
      return NextResponse.json(
        {
          success: true,
          message: "User already exists.",
          data: existingUser,
        },
        { status: 200 }
      );
    }

    const user = await User.create({
      firebaseUid,
      fullName,
      email,
      role: role || "student",
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully.",
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create User Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create user.",
      },
      { status: 500 }
    );
  }
}