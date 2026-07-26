"use client";

import CareerCard from "./CareerCard";
import { CareerRoadmap } from "../types/roadmap";

interface Props {
  roadmaps: CareerRoadmap[];
}

export default function CareerGrid({ roadmaps }: Props) {
  if (roadmaps.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold">
          No careers found
        </h2>

        <p className="mt-2 text-muted-foreground">
          Try another search.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {roadmaps.map((roadmap) => (
        <CareerCard
          key={roadmap._id}
          roadmap={roadmap}
        />
      ))}
    </div>
  );
}