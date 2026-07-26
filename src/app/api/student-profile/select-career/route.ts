import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";

import User from "@/models/User";
import StudentProfile from "@/models/StudentProfile";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { firebaseUid, roadmap } = body;

    if (!firebaseUid || !roadmap) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
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

    const profile =
      await StudentProfile.findOneAndUpdate(
        {
          userId: user._id,
        },
        {
          roadmap,
          currentPhase: 0,
          progress: 0,
          selectedCareerAt: new Date(),
        },
        {
          new: true,
        }
      );

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          message: "Student profile not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to select career.",
      },
      {
        status: 500,
      }
    );
  }
}