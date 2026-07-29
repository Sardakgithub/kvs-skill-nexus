"use client";

import { useQuery } from "@tanstack/react-query";

import { studentDashboardService } from "../services/student-dashboard.service";

export function useStudentDashboard(firebaseUid?: string) {
  return useQuery({
    queryKey: ["student-dashboard", firebaseUid],

    queryFn: () =>
      studentDashboardService.getDashboard(firebaseUid!),

    enabled: !!firebaseUid,

    staleTime: 1000 * 60 * 5,
  });
}