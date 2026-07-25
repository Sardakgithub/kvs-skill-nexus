export interface UserProfile {
  _id: string;
  firebaseUid: string;
  fullName: string;
  email: string;
  role: "student" | "mentor" | "admin";
  profileImage: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}