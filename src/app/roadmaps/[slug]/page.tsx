"use client";

import { use } from "react";

import {
  ChooseCareerButton,
  RoadmapHero,
  RoadmapPhase,
} from "@/features/roadmap/components";

import { useRoadmap } from "@/features/roadmap/hooks/useRoadmap";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function RoadmapDetailsPage({
  params,
}: Props) {
  const { slug } = use(params);

  const {
    roadmap,
    loading,
    error,
  } = useRoadmap(slug);

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        Loading roadmap...
      </div>
    );
  }

  if (error || !roadmap) {
    return (
      <div className="container mx-auto py-10">
        Roadmap not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <RoadmapHero roadmap={roadmap} />

      {roadmap.phases.length > 0 ? (
        roadmap.phases.map((phase, index) => (
          <RoadmapPhase
            key={index}
            phase={phase}
            index={index}
          />
        ))
      ) : (
        <p className="text-muted-foreground">
          No learning phases have been added yet.
        </p>
      )}

      <ChooseCareerButton
        roadmap={roadmap.slug}
      />
    </div>
  );
}