import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";

import User from "@/models/User";
import StudentProfile from "@/models/StudentProfile";

import { studentProgressRepository } from "@/repositories/student-progress.repository";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const firebaseUid = request.headers.get("x-firebase-uid");

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

    const profile = await StudentProfile.findOne({
      userId: user._id,
    });

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          message: "Student profile not found.",
        },
        { status: 404 }
      );
    }

    const progress =
      await studentProgressRepository.findByUserId(
        user._id.toString()
      );

    return NextResponse.json(
      {
        success: true,
        data: {
          profile,
          progress,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch progress.",
      },
      {
        status: 500,
      }
    );
  }
}