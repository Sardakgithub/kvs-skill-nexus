import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";

import User from "@/models/User";
import StudentProfile from "@/models/StudentProfile";

import { roadmapRepository } from "@/repositories/roadmap.repository";
import { studentProgressRepository } from "@/repositories/student-progress.repository";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const { firebaseUid, phaseIndex } = body;

    if (!firebaseUid) {
      return NextResponse.json(
        {
          success: false,
          message: "Firebase UID is required.",
        },
        { status: 400 }
      );
    }

    if (typeof phaseIndex !== "number") {
      return NextResponse.json(
        {
          success: false,
          message: "Phase index is required.",
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

    const roadmap = await roadmapRepository.findBySlug(
      profile.roadmap
    );

    if (!roadmap) {
      return NextResponse.json(
        {
          success: false,
          message: "Roadmap not found.",
        },
        { status: 404 }
      );
    }

    let progress =
      await studentProgressRepository.findByUserId(
        user._id.toString()
      );

    if (!progress) {
      progress =
        await studentProgressRepository.create({
          userId: user._id,
          roadmap: profile.roadmap,
        });
    }

    const completedPhases = new Set(
      progress.completedPhases
    );

    completedPhases.add(phaseIndex);

    const completedArray = [...completedPhases].sort(
      (a, b) => a - b
    );

    const percentage = Math.round(
      (completedArray.length /
        roadmap.phases.length) *
        100
    );

    const updatedProgress =
      await studentProgressRepository.updateByUserId(
        user._id.toString(),
        {
          completedPhases: completedArray,
          lastCompletedPhase: phaseIndex,
          progress: percentage,
        }
      );

    profile.currentPhase = Math.min(
      phaseIndex + 1,
      roadmap.phases.length - 1
    );

    profile.progress = percentage;

    await profile.save();

    return NextResponse.json(
      {
        success: true,
        data: updatedProgress,
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
        message: "Failed to update progress.",
      },
      {
        status: 500,
      }
    );
  }
}