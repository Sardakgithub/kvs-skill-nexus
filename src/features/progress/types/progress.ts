export interface StudentProgress {
  _id: string;

  userId: string;

  roadmap: string;

  completedPhases: number[];

  completedSkills: string[];

  completedProjects: string[];

  lastCompletedPhase: number;

  progress: number;

  createdAt: string;

  updatedAt: string;
}

export interface CompletePhaseRequest {
  firebaseUid: string;

  phaseIndex: number;
}

export interface ProgressResponse {
  profile: {
    roadmap: string;

    progress: number;

    currentPhase: number;

    certificates: number;
  };

  progress: StudentProgress | null;
}