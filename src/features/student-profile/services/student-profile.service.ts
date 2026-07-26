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

export const studentProfileService = {
  async getProfile(firebaseUid: string) {
    const response = await fetch("/api/student-profile/me", {
      headers: {
        "x-firebase-uid": firebaseUid,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data as StudentProfile;
  },

  async updateProfile(
    firebaseUid: string,
    payload: Partial<StudentProfile>
  ) {
    const response = await fetch("/api/student-profile/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-firebase-uid": firebaseUid,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data as StudentProfile;
  },

  async selectCareer(
    firebaseUid: string,
    roadmap: string
  ) {
    const response = await fetch(
      "/api/student-profile/select-career",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firebaseUid,
          roadmap,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data as StudentProfile;
  },
};