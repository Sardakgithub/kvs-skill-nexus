"use client";

import PhaseCard from "./PhaseCard";

interface Phase {
  title: string;
  description: string;
}

interface TimelineProps {
  phases: Phase[];
  completedPhases: number[];
  currentPhase: number;
  onComplete: (index: number) => void;
}

export default function LearningTimeline({
  phases,
  completedPhases,
  currentPhase,
  onComplete,
}: TimelineProps) {
  return (
    <div className="space-y-6">

      {phases.map((phase, index) => (

        <PhaseCard
          key={index}
          index={index}
          title={phase.title}
          description={phase.description}
          completed={completedPhases.includes(index)}
          active={currentPhase === index}
          locked={index > currentPhase}
          onComplete={() =>
            onComplete(index)
          }
        />

      ))}

    </div>
  );
}