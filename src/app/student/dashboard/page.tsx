"use client";

import ProtectedRoute from "@/components/auth/protected-route";

import StudentHeader from "@/features/student/components/StudentHeader";
import StudentStatsCards from "@/features/student/components/StudentStatsCards";
import ContinueLearningCard from "@/features/student/components/ContinueLearningCard";

import { useAuthContext } from "@/providers/auth-provider";
import { useStudentDashboard } from "@/features/student/hooks/useStudentDashboard";

export default function StudentDashboardPage() {
  const { user } = useAuthContext();

  const {
    data,
    isLoading,
    isError,
  } = useStudentDashboard(user?.uid);

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="container mx-auto py-10">
          <p>Loading dashboard...</p>
        </div>
      </ProtectedRoute>
    );
  }

  if (isError || !data) {
    return (
      <ProtectedRoute>
        <div className="container mx-auto py-10">
          <p>Failed to load dashboard.</p>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto max-w-7xl py-10">

        <StudentHeader
          fullName={data.user.fullName}
        />

        <StudentStatsCards
          roadmap={data.profile.roadmap}
          progress={data.profile.progress}
          currentPhase={data.profile.currentPhase}
          certificates={data.profile.certificates}
        />

        {data.roadmap && (
          <ContinueLearningCard
            roadmapSlug={data.roadmap.slug}
          />
        )}

      </div>
    </ProtectedRoute>
  );
}