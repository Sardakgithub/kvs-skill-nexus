import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";  
import User from "@/models/User";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const firebaseUid =
      request.headers.get("x-firebase-uid");

    if (!firebaseUid) {
      return NextResponse.json(
        {
          success: false,
          message: "Firebase UID is required.",
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      firebaseUid,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch user.",
      },
      { status: 500 }
    );
  }
}