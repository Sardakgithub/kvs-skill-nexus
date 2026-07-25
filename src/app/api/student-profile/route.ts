import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";

import User from "@/models/User";
import StudentProfile from "@/models/StudentProfile";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { firebaseUid } = body;

    if (!firebaseUid) {
      return NextResponse.json(
        {
          success: false,
          message: "Firebase UID is required.",
        },
        {
          status: 400,
        }
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
        {
          status: 404,
        }
      );
    }

    const existingProfile =
      await StudentProfile.findOne({
        userId: user._id,
      });

    if (existingProfile) {
      return NextResponse.json(
        {
          success: false,
          message: "Student profile already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const profile =
      await StudentProfile.create({
        userId: user._id,
      });

    return NextResponse.json(
      {
        success: true,
        data: profile,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create student profile.",
      },
      {
        status: 500,
      }
    );
  }
}