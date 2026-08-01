import { NextRequest } from "next/server";

import { connectDB } from "@/lib/mongodb/mongodb";

import User from "@/models/User";

export async function getAuthenticatedUser(
  request: NextRequest
) {
  await connectDB();

  const firebaseUid =
    request.headers.get("x-firebase-uid");

  if (!firebaseUid) {
    throw new Error("Firebase UID is required.");
  }

  const user = await User.findOne({
    firebaseUid,
  });

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
}