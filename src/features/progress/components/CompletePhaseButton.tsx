"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import { progressService } from "../services/progress.service";

interface Props {
  firebaseUid: string;
  phaseIndex: number;
}

export default function CompletePhaseButton({
  firebaseUid,
  phaseIndex,
}: Props) {
  const queryClient =
    useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
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

  return (
    <Button
      onClick={() =>
        mutation.mutate()
      }
      disabled={mutation.isPending}
    >
      {mutation.isPending
        ? "Updating..."
        : "Complete Phase"}
    </Button>
  );
}