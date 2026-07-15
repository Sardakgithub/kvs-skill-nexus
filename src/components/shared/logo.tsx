import Link from "next/link";
import { GraduationCap } from "lucide-react";

interface LogoProps {
  showTagline?: boolean;
}

export default function Logo({
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
        <GraduationCap className="h-6 w-6" />
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight">
          KVS Skill Nexus
        </span>

        {showTagline && (
          <span className="text-xs text-muted-foreground">
            Learn • Build • Connect • Grow
          </span>
        )}
      </div>
    </Link>
  );
}