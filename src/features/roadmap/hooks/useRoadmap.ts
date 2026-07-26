"use client";

import { useEffect, useState } from "react";
import { roadmapService } from "../services/roadmap.service";
import { CareerRoadmap } from "../types/roadmap";

export function useRoadmap(slug: string) {
  const [roadmap, setRoadmap] = useState<CareerRoadmap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRoadmap() {
      try {
        setLoading(true);

        const data = await roadmapService.getBySlug(slug);

        setRoadmap(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to load roadmap.");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadRoadmap();
    }
  }, [slug]);

  return {
    roadmap,
    loading,
    error,
  };
}