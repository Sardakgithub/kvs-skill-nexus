import { apiClient } from "@/lib/api";

import {
  ProgressResponse,
  StudentProgress,
} from "../types/progress";

class ProgressService {
  async getProgress(
    firebaseUid: string
  ): Promise<ProgressResponse> {
    return apiClient.get<ProgressResponse>(
      "/api/student/progress",
      firebaseUid
    );
  }

  async completePhase(
    firebaseUid: string,
    phaseIndex: number
  ): Promise<StudentProgress> {
    return apiClient.post<StudentProgress>(
      "/api/student/progress/complete",
      {
        firebaseUid,
        phaseIndex,
      }
    );
  }
}

export const progressService =
  new ProgressService();