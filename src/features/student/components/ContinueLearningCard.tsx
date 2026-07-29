"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  roadmapSlug: string;
}

export default function ContinueLearningCard({
  roadmapSlug,
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
          Continue where you left off in your selected roadmap.
        </p>

        <Button
          onClick={() =>
            router.push(`/roadmaps/${roadmapSlug}`)
          }
          disabled={!roadmapSlug}
        >
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
}