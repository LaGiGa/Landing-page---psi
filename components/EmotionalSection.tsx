"use client";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/site";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const painPoints = [
  "Ansiedade constante",
  "Pensamentos acelerados",
  "Dificuldade para relaxar",
  "Cansaço emocional",
  "Conflitos em relacionamentos",
  "Sensação de estar perdido",
];

export function EmotionalSection() {
  return (
    <section className="bg-white py-16 md:py-24" id="sinais">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
              Quando a rotina começa a pesar
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-stone-900 md:mb-6 md:text-4xl">
              Você pode estar funcionando por fora e esgotado por dentro.
            </h2>
            <p className="mb-4 text-base leading-relaxed text-stone-600 md:mb-5 md:text-lg">
              Muita gente procura ajuda só quando sente que não consegue mais
              sustentar tudo. Mas o cuidado psicológico pode começar antes do
              limite.
            </p>
            <p className="mb-7 text-base leading-relaxed text-stone-600 md:mb-8 md:text-lg">
              Se você sente que sua energia está sempre no fim, que a mente não
              desacelera ou que as relações estão mais difíceis, a terapia pode
              ser um bom começo para entender o que está acontecendo.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link
                href={createWhatsAppLink(
                  "Olá, quero entender se este atendimento faz sentido para mim neste momento.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Entender se este atendimento faz sentido
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[1.75rem] border border-[var(--sand-100)] bg-[var(--sand-50)] p-6 shadow-sm md:rounded-[2rem] md:p-8"
          >
            <ul className="space-y-5 md:space-y-6">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-[var(--brand-600)]" />
                  <span className="text-base font-medium text-stone-800 md:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
