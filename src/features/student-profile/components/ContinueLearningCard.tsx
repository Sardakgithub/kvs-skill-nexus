"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface Props {
  roadmap: string;
}

export default function ContinueLearningCard({
  roadmap,
}: Props) {
  const router = useRouter();

  return (
    <Card className="mt-8">

      <CardHeader>
        <CardTitle>
          Continue Learning
        </CardTitle>
      </CardHeader>

      <CardContent>

        <p className="mb-6 text-muted-foreground">
          Continue your learning journey from
          where you left off.
        </p>

        <Button
          onClick={() =>
            router.push(`/roadmaps/${roadmap}`)
          }
        >
          Continue Learning
        </Button>

      </CardContent>

    </Card>
  );
}