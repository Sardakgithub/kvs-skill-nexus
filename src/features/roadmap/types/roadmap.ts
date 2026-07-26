export interface RoadmapPhase {
  title: string;
  description: string;
  skills: string[];
  projects: string[];
}

export interface CareerRoadmap {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedDuration: string;
  thumbnail?: string;
  isPublished: boolean;
  phases: RoadmapPhase[];
}