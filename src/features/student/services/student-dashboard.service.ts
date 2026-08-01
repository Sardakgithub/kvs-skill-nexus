import { apiClient } from "@/lib/api";

import type { StudentDashboard } from "../types/dashboard";

class StudentDashboardService {
  async getDashboard(
    firebaseUid: string
  ): Promise<StudentDashboard> {
    return apiClient.get<StudentDashboard>(
      "/api/student/dashboard",
      firebaseUid
    );
  }
}

export const studentDashboardService =
  new StudentDashboardService();