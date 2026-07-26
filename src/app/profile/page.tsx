"use client";

import ProtectedRoute from "@/components/auth/protected-route";

import StudentProfileForm from "@/features/student-profile/components/StudentProfileForm";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-4xl font-bold">
            Student Profile
          </h1>

          <StudentProfileForm />
        </div>
      </main>
    </ProtectedRoute>
  );
}