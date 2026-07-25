"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { publicNavigation } from "@/config/navigation";
import Logo from "@/components/shared/Logo";

export default function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right" className="w-80">
          <div className="mt-6 flex flex-col gap-8">
            <Logo showTagline={false} />

            <nav className="flex flex-col gap-4">
              {publicNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-indigo-600"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <Button variant="outline">
                Login
              </Button>

              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}