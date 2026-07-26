"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { studentProfileService } from "@/features/student-profile/services/student-profile.service";
import { useAuthContext } from "@/providers/auth-provider";

interface Props {
  roadmap: string;
}

export default function ChooseCareerButton({
  roadmap,
}: Props) {
  const router = useRouter();

  const { user } = useAuthContext();

  const [loading, setLoading] = useState(false);

  async function handleChooseCareer() {
    if (!user) {
      return;
    }

    try {
      setLoading(true);

      await studentProfileService.selectCareer(
        user.uid,
        roadmap
      );

      alert("Career selected successfully!");

      router.push("/student/dashboard");
    } catch (error) {
      console.error(error);

      alert("Unable to select career.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      className="mt-10 w-full"
      disabled={loading}
      onClick={handleChooseCareer}
    >
      {loading
        ? "Saving..."
        : "Choose This Career"}
    </Button>
  );
}