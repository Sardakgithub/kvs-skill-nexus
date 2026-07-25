"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { howItWorks } from "@/data/mock/how-it-works";

export default function HowItWorks() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            How It
            <span className="text-primary"> Works</span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            A guided journey from choosing your career to landing your first job.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-background p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl font-bold text-primary/20">
                {item.step}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-7 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}