"use client";

import Link from "next/link";

import { CareerRoadmap } from "../types/roadmap";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  roadmap: CareerRoadmap;
}

export default function CareerCard({ roadmap }: Props) {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>{roadmap.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {roadmap.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge>{roadmap.difficulty}</Badge>

          <Badge variant="secondary">
            {roadmap.estimatedDuration}
          </Badge>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/roadmaps/${roadmap.slug}`}>
            Explore Career
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}