"use client";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">
          Overall Progress
        </span>

        <span className="text-sm font-semibold">
          {progress}%
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-muted">
        <div
          className="h-3 rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}