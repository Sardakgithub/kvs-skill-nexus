export const Roles = {
  STUDENT: "student",
  MENTOR: "mentor",
  ADMIN: "admin",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];