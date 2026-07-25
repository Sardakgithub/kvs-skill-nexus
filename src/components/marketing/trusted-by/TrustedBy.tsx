"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { trustedCompanies } from "@/data/mock/trusted-companies";

export default function TrustedBy() {
  return (
    <section className="border-y bg-muted/20 py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Inspired by industry standards and modern technology stacks
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-background p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}