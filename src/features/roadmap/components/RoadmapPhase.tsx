"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { RoadmapPhase as Phase } from "../types/roadmap";

interface Props {
  phase: Phase;
  index: number;

  completed?: boolean;
  active?: boolean;
  locked?: boolean;

  onComplete?: () => void;
}

export default function RoadmapPhase({
  phase,
  index,
  completed = false,
  active = false,
  locked = false,
  onComplete,
}: Props) {
  return (
    <Card
      className={`mb-6 transition-all ${
        completed
          ? "border-green-500"
          : active
          ? "border-primary"
          : locked
          ? "opacity-60"
          : ""
      }`}
    >
      <CardHeader>

        <div className="flex items-center justify-between">

          <CardTitle>
            Phase {index + 1}: {phase.title}
          </CardTitle>

          {completed && (
            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
              Completed
            </span>
          )}

          {!completed && active && (
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              Current
            </span>
          )}

          {locked && (
            <span className="rounded-full bg-muted px-3 py-1 text-xs">
              Locked
            </span>
          )}

        </div>

      </CardHeader>

      <CardContent className="space-y-6">

        <p>{phase.description}</p>

        <div>

          <h3 className="mb-2 font-semibold">
            Skills
          </h3>

          <ul className="ml-6 list-disc space-y-1">
            {phase.skills.map((skill) => (
              <li key={skill}>
                {skill}
              </li>
            ))}
          </ul>

        </div>

        <div>

          <h3 className="mb-2 font-semibold">
            Projects
          </h3>

          <ul className="ml-6 list-disc space-y-1">
            {phase.projects.map((project) => (
              <li key={project}>
                {project}
              </li>
            ))}
          </ul>

        </div>

        {active && !completed && !locked && (
          <Button
            onClick={onComplete}
            className="w-full"
          >
            Complete Phase
          </Button>
        )}

      </CardContent>
    </Card>
  );
}