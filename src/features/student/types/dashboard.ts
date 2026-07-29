import { StudentProfile } from "@/features/student-profile/services/student-profile.service";

export interface DashboardUser {
  fullName: string;
  email: string;
  profileImage?: string;
}

export interface DashboardRoadmap {
  title: string;
  slug: string;
  estimatedDuration: string;
  totalPhases: number;
}

export interface StudentDashboard {
  user: DashboardUser;
  profile: StudentProfile;
  roadmap: DashboardRoadmap | null;
}