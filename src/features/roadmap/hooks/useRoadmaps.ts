"use client";

import { useEffect, useState } from "react";
import { roadmapService } from "../services/roadmap.service";
import { CareerRoadmap } from "../types/roadmap";

export function useRoadmaps() {
  const [roadmaps, setRoadmaps] = useState<CareerRoadmap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRoadmaps() {
      try {
        setLoading(true);

        const data = await roadmapService.getAll();

        setRoadmaps(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to load roadmaps.");
      } finally {
        setLoading(false);
      }
    }

    loadRoadmaps();
  }, []);

  return {
    roadmaps,
    loading,
    error,
  };
}