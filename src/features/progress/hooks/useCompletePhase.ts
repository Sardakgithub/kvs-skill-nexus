"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { progressService } from "../services/progress.service";

export function useCompletePhase(
  firebaseUid: string
) {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (phaseIndex: number) =>
      progressService.completePhase(
        firebaseUid,
        phaseIndex
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "student-progress",
          firebaseUid,
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "student-dashboard",
          firebaseUid,
        ],
      });
    },
  });
}