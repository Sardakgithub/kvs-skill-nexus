import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RoadmapPhase as Phase } from "../types/roadmap";

interface Props {
  phase: Phase;
  index: number;
}

export default function RoadmapPhase({
  phase,
  index,
}: Props) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>
          Phase {index + 1}: {phase.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <p>{phase.description}</p>

        <div>
          <h3 className="font-semibold mb-2">
            Skills
          </h3>

          <ul className="list-disc ml-6 space-y-1">
            {phase.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Projects
          </h3>

          <ul className="list-disc ml-6 space-y-1">
            {phase.projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}