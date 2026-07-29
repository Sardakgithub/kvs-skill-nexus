"use client";

import { useQuery } from "@tanstack/react-query";

import { studentProfileService } from "../services/student-profile.service";

export function useStudentProfile(
  firebaseUid?: string
) {
  return useQuery({
    queryKey: ["student-profile", firebaseUid],

    queryFn: () =>
      studentProfileService.getProfile(
        firebaseUid!
      ),

    enabled: !!firebaseUid,

    staleTime: 1000 * 60 * 5,
  });
}