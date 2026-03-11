"use client";

import { motion } from "motion/react";

const personas = [
  {
    title: "Para quem vive em alerta constante",
    description:
      "Quando a mente não desacelera, o corpo cobra, o sono piora e a sensação é de estar sempre tentando dar conta de tudo.",
  },
  {
    title: "Para quem está atravessando mudanças",
    description:
      "Mudanças de trabalho, relacionamento, cidade ou fase de vida podem trazer insegurança, confusão e cansaço emocional.",
  },
  {
    title: "Para quem quer começar terapia sem complicação",
    description:
      "A página foi desenhada para quem precisa de acolhimento, clareza e um primeiro contato simples, sem excesso de barreiras.",
  },
];

export function ForWho() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-[var(--brand-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,246,242,0.88))] p-6 shadow-sm md:rounded-[2.25rem] md:p-8"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
              Para quem é este atendimento
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Uma forma simples de a pessoa se reconhecer na página.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              Em vez de falar só sobre o serviço, esta seção ajuda quem chega a
              perceber rapidamente se o atendimento conversa com o momento que
              ela está vivendo.
            </p>
          </motion.div>

          <div className="grid gap-4 md:gap-5">
            {personas.map((persona, index) => (
              <motion.article
                key={persona.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-sm transition-transform md:rounded-[2rem] md:p-7"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.06 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-100)] text-sm font-semibold text-[var(--brand-700)] md:h-12 md:w-12"
                  >
                    0{index + 1}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 md:text-xl">
                      {persona.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-stone-600">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
