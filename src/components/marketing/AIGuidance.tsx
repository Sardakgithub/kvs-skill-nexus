"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    role: "Full Stack Developer",
    score: 95,
  },
  {
    role: "AI Engineer",
    score: 89,
  },
  {
    role: "Backend Developer",
    score: 82,
  },
];

export default function AIGuidance() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <Sparkles className="h-4 w-4" />
              AI Powered Career Guidance
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              Find Your
              <br />
              <span className="text-primary">
                Ideal Career
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-8">
              Our AI analyzes your interests, technical skills,
              learning preferences, and career goals to recommend
              the best career path along with a personalized roadmap.
            </p>

            <Button className="mt-8">
              Try AI Guidance
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl">
              <CardContent className="space-y-8 p-8">
                <div>
                  <h3 className="text-lg font-semibold">
                    Student Profile
                  </h3>

                  <div className="mt-5 space-y-3 text-muted-foreground">
                    <p>
                      <strong>Skills:</strong> Java, Python, React
                    </p>

                    <p>
                      <strong>Interests:</strong> AI, Web Development
                    </p>

                    <p>
                      <strong>Experience:</strong> Beginner
                    </p>
                  </div>
                </div>

                <hr />

                <div>
                  <h3 className="mb-5 text-lg font-semibold">
                    AI Recommendations
                  </h3>

                  <div className="space-y-5">
                    {recommendations.map((item) => (
                      <div key={item.role}>
                        <div className="mb-2 flex justify-between">
                          <span>{item.role}</span>

                          <span className="font-semibold text-primary">
                            {item.score}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{
                              width: `${item.score}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Generate Learning Roadmap
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}