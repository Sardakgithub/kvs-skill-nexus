import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";
import { roadmapRepository } from "@/repositories/roadmap.repository";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    const roadmap = await roadmapRepository.findBySlug(slug);

    if (!roadmap) {
      return NextResponse.json(
        {
          success: false,
          message: "Roadmap not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch roadmap.",
      },
      {
        status: 500,
      }
    );
  }
}