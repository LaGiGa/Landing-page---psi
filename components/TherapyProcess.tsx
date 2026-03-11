"use client";

import { CalendarCheck, HeartHandshake, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: <MessageCircle className="h-8 w-8 text-[var(--brand-600)]" />,
    title: "1. Você chama no WhatsApp",
    description:
      "Você envia uma mensagem simples, tira dúvidas e entende se este é o momento certo para começar.",
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-[var(--brand-600)]" />,
    title: "2. Definimos o melhor formato",
    description:
      "Combinamos horário, frequência e se o atendimento será online ou presencial.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-[var(--brand-600)]" />,
    title: "3. Começamos o acompanhamento",
    description:
      "A partir daí, o trabalho terapêutico acontece com escuta, sigilo e constância.",
  },
];

export function TherapyProcess() {
  return (
    <section className="bg-white py-16 md:py-24" id="como-funciona">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
            Processo simples
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Como funciona a terapia?
          </h2>
          <p className="text-base text-stone-600 md:text-lg">
            Dar o primeiro passo pode parecer difícil, então a página explica o
            caminho de forma direta e sem burocracia.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 text-center transition-shadow hover:shadow-md md:rounded-[2rem] md:p-8"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-100)] md:mb-6 md:h-16 md:w-16">
                {step.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-stone-900 md:mb-4 md:text-xl">
                {step.title}
              </h3>
              <p className="leading-relaxed text-stone-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
