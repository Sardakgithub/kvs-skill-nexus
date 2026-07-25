"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { mentors } from "@/data/mock/mentors";

export default function Mentors() {
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
            Learn From
            <br />
            <span className="text-primary">
              Industry Experts
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Connect with experienced professionals who can guide
            your career, review your projects, and help you
            prepare for interviews.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                      {mentor.name.charAt(0)}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-semibold">
                      {mentor.name}
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      {mentor.role}
                    </p>

                    <p className="font-medium text-primary">
                      {mentor.company}
                    </p>
                  </div>

                  <div className="my-6 flex items-center justify-center gap-2">
                    <Star
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold">
                      {mentor.rating}
                    </span>

                    <span className="text-muted-foreground">
                      ({mentor.reviews} Reviews)
                    </span>
                  </div>

                  <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {mentor.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full">
                    Book Session
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