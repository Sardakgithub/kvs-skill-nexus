import { apiClient } from "@/lib/api";

export interface StudentProfile {
  _id: string;
  userId: string;

  phone: string;
  college: string;
  degree: string;
  specialization: string;
  graduationYear: number;

  bio: string;
  location: string;

  skills: string[];

  roadmap: string;
  currentPhase: number;
  progress: number;
  certificates: number;

  selectedCareerAt?: string;

  createdAt: string;
  updatedAt: string;
}

class StudentProfileService {
  async getProfile(
    firebaseUid: string
  ): Promise<StudentProfile> {
    return apiClient.get<StudentProfile>(
      "/api/student-profile/me",
      firebaseUid
    );
  }

  async updateProfile(
    firebaseUid: string,
    payload: Partial<StudentProfile>
  ): Promise<StudentProfile> {
    return apiClient.put<StudentProfile>(
      "/api/student-profile/me",
      payload,
      firebaseUid
    );
  }

  async selectCareer(
    firebaseUid: string,
    roadmap: string
  ): Promise<StudentProfile> {
    return apiClient.post<StudentProfile>(
      "/api/student-profile/select-career",
      {
        firebaseUid,
        roadmap,
      }
    );
  }
}

export const studentProfileService =
  new StudentProfileService();