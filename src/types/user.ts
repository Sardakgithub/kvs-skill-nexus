export interface User {
  id: string;
  fullName: string;
  email: string;
  role: "student" | "mentor" | "admin";
  avatar?: string;
  createdAt: Date;
}