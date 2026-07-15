"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { publicNavigation } from "@/config/navigation";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-8 lg:flex">
      <nav className="flex items-center gap-6">
        {publicNavigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                active
                  ? "text-indigo-600"
                  : "text-muted-foreground"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <Button variant="ghost">Login</Button>

        <Button>Get Started</Button>
      </div>
    </div>
  );
}