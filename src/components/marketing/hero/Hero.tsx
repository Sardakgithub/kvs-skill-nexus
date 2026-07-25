"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/config/home";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ---------------- Left Side ---------------- */}

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="rounded-full px-4 py-2 text-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                {heroContent.badge}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Build Your Career
              <br />
              <span className="text-primary">With Confidence</span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Button size="lg" asChild>
                <Link href={heroContent.primaryButton.href}>
                  {heroContent.primaryButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link href={heroContent.secondaryButton.href}>
                  {heroContent.secondaryButton.text}
                </Link>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Trusted by students, mentors, and aspiring professionals.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              {heroContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border bg-card p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold">{stat.value}</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ---------------- Right Side ---------------- */}

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.4 },
              scale: { duration: 0.5, delay: 0.4 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="rounded-3xl border bg-card p-8 shadow-2xl">
              <div className="space-y-5">
                {/* Student Progress */}

                <div className="rounded-2xl border bg-background p-5">
                  <h4 className="font-semibold">
                    📈 Student Progress
                  </h4>

                  <div className="mt-4 h-3 rounded-full bg-muted">
                    <div className="h-3 w-3/4 rounded-full bg-primary" />
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    78% Completed
                  </p>
                </div>

                {/* AI Recommendation */}

                <div className="rounded-2xl border bg-background p-5">
                  <h4 className="font-semibold">
                    🤖 AI Recommendation
                  </h4>

                  <p className="mt-2 text-muted-foreground">
                    Continue the Full Stack Developer Roadmap.
                  </p>
                </div>

                {/* Mentor */}

                <div className="rounded-2xl border bg-background p-5">
                  <h4 className="font-semibold">
                    👨‍🏫 Mentor Session
                  </h4>

                  <p className="mt-2 text-muted-foreground">
                    Tomorrow • 10:00 AM
                  </p>
                </div>

                {/* Resume */}

                <div className="rounded-2xl border bg-background p-5">
                  <h4 className="font-semibold">
                    📄 Resume Score
                  </h4>

                  <p className="mt-2 text-muted-foreground">
                    ATS Score: 92 / 100
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}