"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { StudentProfile } from "../services/student-profile.service";

interface Props {
  profile: StudentProfile;
}

export default function StudentStatsCards({
  profile,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <Card>

        <CardHeader>
          <CardTitle>
            Current Career
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-lg font-semibold">
            {profile.roadmap || "Not Selected"}
          </p>
        </CardContent>

      </Card>

      <Card>

        <CardHeader>
          <CardTitle>
            Progress
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {profile.progress}%
          </p>
        </CardContent>

      </Card>

      <Card>

        <CardHeader>
          <CardTitle>
            Current Phase
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {profile.currentPhase + 1}
          </p>
        </CardContent>

      </Card>

      <Card>

        <CardHeader>
          <CardTitle>
            Certificates
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {profile.certificates}
          </p>
        </CardContent>

      </Card>

    </div>
  );
}