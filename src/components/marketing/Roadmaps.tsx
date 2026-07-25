"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roadmaps } from "@/data/mock/roadmaps";

export default function Roadmaps() {
  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Choose Your
            <br />
            <span className="text-primary">Career Path</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Follow structured roadmaps built by industry experts to
            become job-ready with confidence.
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={roadmap.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {roadmap.title}
                      </h3>

                      <p className="text-muted-foreground">
                        {roadmap.duration}
                      </p>
                    </div>

                    <Button variant="outline">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {roadmap.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{roadmap.progress}%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{
                          width: `${roadmap.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}