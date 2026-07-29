import { StudentDashboard } from "../types/dashboard";

export const studentDashboardService = {
  async getDashboard(firebaseUid: string): Promise<StudentDashboard> {
    const response = await fetch("/api/student/dashboard", {
      headers: {
        "x-firebase-uid": firebaseUid,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data as StudentDashboard;
  },
};