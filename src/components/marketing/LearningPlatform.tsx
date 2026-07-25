"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  PlayCircle,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { courses } from "@/data/mock/courses";

export default function LearningPlatform() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Learn
            <br />
            <span className="text-primary">
              Anytime, Anywhere
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Interactive lessons, quizzes, coding projects,
            assignments and certifications designed to
            make learning engaging.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-44 items-center justify-center bg-primary/10">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>

                <CardContent className="space-y-5 p-6">
                  <div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {course.category}
                    </span>

                    <h3 className="mt-4 text-2xl font-semibold">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      {course.instructor}
                    </p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons} Lessons
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>

                    <div className="h-3 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <Button className="w-full">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}