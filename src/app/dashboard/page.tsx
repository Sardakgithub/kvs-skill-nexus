"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/auth/protected-route";

import { useAuthContext } from "@/providers/auth-provider";
import { useAuth } from "@/features/auth/hooks/use-auth";

export default function DashboardPage() {
  const router = useRouter();

  const { user, profile, loading } =
    useAuthContext();

  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();

      router.replace("/login");
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return (
      <ProtectedRoute>
        <main className="flex min-h-screen items-center justify-center">
          Loading...
        </main>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">
                Welcome, {profile?.fullName}
              </h1>

              <p className="mt-2 text-muted-foreground">
                KVS Skill Nexus Dashboard
              </p>
            </div>

            <Button
              variant="destructive"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>

          <div className="rounded-xl border p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">
              Account Information
            </h2>

            <div className="space-y-4">
              <div>
                <strong>Name:</strong>

                <p>{profile?.fullName}</p>
              </div>

              <div>
                <strong>Email:</strong>

                <p>{profile?.email}</p>
              </div>

              <div>
                <strong>Role:</strong>

                <p>{profile?.role}</p>
              </div>

              <div>
                <strong>Status:</strong>

                <p>
                  {profile?.isActive
                    ? "Active"
                    : "Inactive"}
                </p>
              </div>

              <div>
                <strong>Firebase UID:</strong>

                <p className="break-all">
                  {user?.uid}
                </p>
              </div>

              <div>
                <strong>Email Verified:</strong>

                <p>
                  {user?.emailVerified
                    ? "Yes"
                    : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}