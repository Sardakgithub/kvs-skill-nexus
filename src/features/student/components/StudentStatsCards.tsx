"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  progress: number;
  currentPhase: number;
  certificates: number;
  roadmap: string;
}

export default function StudentStatsCards({
  progress,
  currentPhase,
  certificates,
  roadmap,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Career Path</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="font-semibold">
            {roadmap || "Not Selected"}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {progress}%
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Phase</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {currentPhase + 1}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Certificates</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {certificates}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}