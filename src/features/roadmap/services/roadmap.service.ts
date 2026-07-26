import { CareerRoadmap } from "../types/roadmap";

export const roadmapService = {
  async getAll(): Promise<CareerRoadmap[]> {
    const response = await fetch("/api/roadmaps");

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  },

  async getBySlug(slug: string): Promise<CareerRoadmap> {
    const response = await fetch(`/api/roadmaps/${slug}`);

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result.data;
  },
};