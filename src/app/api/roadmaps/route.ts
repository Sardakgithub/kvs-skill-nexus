import { NextResponse } from "next/server";

import { roadmapRepository } from "@/repositories/roadmap.repository";
import { connectDB } from "@/lib/mongodb/mongodb";


export async function GET() {
  try {
    await connectDB();

    const roadmaps = await roadmapRepository.findPublished();

    return NextResponse.json({
      success: true,
      data: roadmaps,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch roadmaps.",
      },
      {
        status: 500,
      }
    );
  }
}