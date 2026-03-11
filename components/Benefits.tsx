"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Falar com liberdade em um espaço de escuta profissional e sigilosa.",
  "Entender melhor gatilhos, padrões emocionais e formas de reação.",
  "Ganhar mais recursos para lidar com ansiedade, pressão e sobrecarga.",
  "Fortalecer limites, vínculos e decisões importantes da vida adulta.",
  "Construir uma rotina emocionalmente mais estável e sustentável.",
  "Retomar a sensação de presença, clareza e direção no dia a dia.",
];

export function Benefits() {
  return (
    <section className="bg-[#f0ece4] py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
            O que a terapia pode favorecer
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Mais do que aliviar sintomas, o processo ajuda você a se reorganizar.
          </h2>
          <p className="text-base text-stone-600 md:text-lg">
            A proposta do acompanhamento é transformar confusão em clareza e
            sobrecarga em uma rotina mais possível de sustentar.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="flex items-start rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-sm md:items-center md:rounded-[1.75rem] md:p-6"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="mt-0.5 md:mt-0"
              >
                <CheckCircle2 className="mr-4 h-6 w-6 shrink-0 text-[var(--brand-600)]" />
              </motion.div>
              <span className="text-base font-medium text-stone-800 md:text-lg">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
