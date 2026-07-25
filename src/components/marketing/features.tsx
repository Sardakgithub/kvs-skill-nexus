"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/config/features";

export default function Features() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Everything You Need
            <br />
            <span className="text-primary">
              To Build Your Career
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            KVS Skill Nexus provides all the tools students need
            to learn, practice, connect with mentors, and land
            their dream jobs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <Card className="group h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mb-4 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}