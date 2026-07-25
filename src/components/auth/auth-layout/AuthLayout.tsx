"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { GraduationCap, BrainCircuit, BookOpen, Users } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const features = [
  {
    icon: BrainCircuit,
    title: "AI Career Guidance",
  },
  {
    icon: BookOpen,
    title: "Personalized Learning",
  },
  {
    icon: Users,
    title: "Industry Mentors",
  },
];

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Panel */}
      <div className="hidden bg-primary px-16 py-20 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <div>
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <GraduationCap className="h-10 w-10" />

            <div>
              <h1 className="text-3xl font-bold">
                KVS Skill Nexus
              </h1>

              <p className="opacity-80">
                AI Powered Career Platform
              </p>
            </div>
          </Link>

          <div className="mt-24 max-w-lg">
            <h2 className="text-5xl font-bold leading-tight">
              Build Your Future
              <br />
              With AI.
            </h2>

            <p className="mt-8 text-lg opacity-90">
              Learn in-demand skills, receive personalized
              career guidance, connect with mentors, and
              become job-ready through one intelligent
              platform.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
            >
              <feature.icon className="h-6 w-6" />

              <span className="text-lg">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="mt-3 text-muted-foreground">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}