import { Badge } from "@/components/ui/badge";
import { CareerRoadmap } from "../types/roadmap";

interface Props {
  roadmap: CareerRoadmap;
}

export default function RoadmapHero({ roadmap }: Props) {
  return (
    <section className="mb-10">
      <h1 className="text-4xl font-bold">{roadmap.title}</h1>

      <p className="mt-4 text-muted-foreground text-lg">
        {roadmap.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Badge>{roadmap.category}</Badge>

        <Badge variant="secondary">
          {roadmap.difficulty}
        </Badge>

        <Badge variant="outline">
          {roadmap.estimatedDuration}
        </Badge>
      </div>
    </section>
  );
}