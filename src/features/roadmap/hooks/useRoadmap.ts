"use client";

import { useQuery } from "@tanstack/react-query";

import { roadmapService } from "../services/roadmap.service";
import type { CareerRoadmap } from "../types/roadmap";

export function useRoadmap(slug?: string) {
  return useQuery<CareerRoadmap>({
    queryKey: ["roadmap", slug],

    queryFn: () =>
      roadmapService.getBySlug(slug!),

    enabled: !!slug,

    staleTime: 1000 * 60 * 10,
  });
}