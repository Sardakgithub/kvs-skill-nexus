export interface LearningState {
  completedPhases: number[];

  unlockedPhases: number[];

  currentPhase: number;

  nextPhase: number | null;

  completionPercentage: number;
}

export function buildLearningState(
  totalPhases: number,
  completedPhases: number[]
): LearningState {

  const completed = [...completedPhases].sort(
    (a, b) => a - b
  );

  const currentPhase =
    completed.length;

  const unlockedPhases = [];

  for (
    let i = 0;
    i <= currentPhase &&
    i < totalPhases;
    i++
  ) {
    unlockedPhases.push(i);
  }

  return {

    completedPhases: completed,

    unlockedPhases,

    currentPhase,

    nextPhase:
      currentPhase >= totalPhases
        ? null
        : currentPhase,

    completionPercentage:
      Math.round(
        (completed.length /
          totalPhases) *
          100
      ),
  };
}