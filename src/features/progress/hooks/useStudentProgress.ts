"use client";

import { useQuery } from "@tanstack/react-query";

import { progressService } from "../services/progress.service";

export function useStudentProgress(
  firebaseUid?: string
) {
  return useQuery({
    queryKey: [
      "student-progress",
      firebaseUid,
    ],

    queryFn: () =>
      progressService.getProgress(
        firebaseUid!
      ),

    enabled: !!firebaseUid,

    staleTime: 1000 * 60 * 5,
  });
}