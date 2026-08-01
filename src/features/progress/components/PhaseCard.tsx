"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PhaseCardProps {
  index: number;
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
  locked: boolean;
  onComplete?: () => void;
}

export default function PhaseCard({
  index,
  title,
  description,
  completed,
  active,
  locked,
  onComplete,
}: PhaseCardProps) {
  return (
    <Card className="p-6">

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-bold">
            Phase {index + 1}
          </h3>

          <h4 className="mt-1 font-semibold">
            {title}
          </h4>

          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>

        </div>

        <div>

          {completed && (
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs text-white">
              Completed
            </span>
          )}

          {active && (
            <Button
              onClick={onComplete}
            >
              Complete Phase
            </Button>
          )}

          {locked && (
            <span className="rounded-full bg-muted px-3 py-1 text-xs">
              Locked
            </span>
          )}

        </div>

      </div>

    </Card>
  );
}