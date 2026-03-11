"use client";

import { motion } from "motion/react";

const trustItems = [
  {
    title: "Acolhimento sem julgamento",
    description:
      "Um espaço para falar com liberdade, sem pressão para ter tudo resolvido logo no início.",
  },
  {
    title: "Clareza no processo",
    description:
      "Explicação simples sobre como funciona o atendimento, frequência e próximos passos.",
  },
  {
    title: "Formato flexível",
    description:
      "Possibilidade de atendimento online ou presencial, conforme a rotina e a necessidade de cada pessoa.",
  },
];

export function WelcomingSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm"
              >
                <div className="mb-5 h-px w-12 bg-[var(--brand-300)]" />
                <p className="text-lg font-semibold text-stone-900">{item.title}</p>
                <p className="mt-3 leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
