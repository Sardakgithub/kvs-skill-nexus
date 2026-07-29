"use client";

interface StudentHeaderProps {
  fullName: string;
}

export default function StudentHeader({
  fullName,
}: StudentHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight">
        Welcome back, {fullName} 👋
      </h1>

      <p className="mt-2 text-muted-foreground">
        Continue your learning journey and track your progress.
      </p>
    </div>
  );
}