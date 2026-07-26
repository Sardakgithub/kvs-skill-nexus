"use client";

import { useMemo, useState } from "react";

import ProtectedRoute from "@/components/auth/protected-route";

import {
  CareerGrid,
  CareerHero,
  CareerSearch,
} from "@/features/roadmap/components";

import { useRoadmaps } from "@/features/roadmap/hooks/useRoadmaps";

export default function RoadmapsPage() {
  const { roadmaps, loading, error } = useRoadmaps();

  const [search, setSearch] = useState("");

  const filteredRoadmaps = useMemo(() => {
    return roadmaps.filter((roadmap) => {
      const query = search.toLowerCase();

      return (
        roadmap.title.toLowerCase().includes(query) ||
        roadmap.description.toLowerCase().includes(query)
      );
    });
  }, [roadmaps, search]);

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-10">
        <CareerHero />

        <CareerSearch
          value={search}
          onChange={setSearch}
        />

        {loading && (
          <p className="py-10 text-center">
            Loading careers...
          </p>
        )}

        {error && (
          <p className="py-10 text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && (
          <CareerGrid roadmaps={filteredRoadmaps} />
        )}
      </div>
    </ProtectedRoute>
  );
}