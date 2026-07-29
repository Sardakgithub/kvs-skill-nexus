import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";

import User from "@/models/User";
import StudentProfile from "@/models/StudentProfile";

import { roadmapRepository } from "@/repositories/roadmap.repository";

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
    }).lean();

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
    }).lean();

    if (!profile) {
      return NextResponse.json(
        {
          success: false,
          message: "Student profile not found.",
        },
        { status: 404 }
      );
    }

    let roadmap = null;

    if (profile.roadmap) {
      roadmap = await roadmapRepository.findBySlug(profile.roadmap);
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          user: {
            fullName: user.fullName,
            email: user.email,
            profileImage: user.profileImage,
          },

          profile,

          roadmap: roadmap
            ? {
                title: roadmap.title,
                slug: roadmap.slug,
                estimatedDuration: roadmap.estimatedDuration,
                totalPhases: roadmap.phases.length,
              }
            : null,
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
        message: "Failed to load dashboard.",
      },
      {
        status: 500,
      }
    );
  }
}