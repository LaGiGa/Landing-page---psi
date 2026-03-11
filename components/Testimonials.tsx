"use client";

import { ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import { motion } from "motion/react";

const expectations = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-[var(--brand-600)]" />,
    title: "Sigilo e ética desde o primeiro contato",
    description:
      "A comunicação, o acolhimento e as sessões são conduzidos com seriedade, escuta e responsabilidade profissional.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-[var(--brand-600)]" />,
    title: "Linguagem clara para quem está começando",
    description:
      "Os textos da página foram pensados para acolher quem ainda tem dúvidas sobre terapia e precisa de informações simples.",
  },
  {
    icon: <UserRoundCheck className="h-8 w-8 text-[var(--brand-600)]" />,
    title: "Um atendimento apresentado com clareza",
    description:
      "A página prioriza acolhimento, objetividade e um caminho simples para o primeiro contato.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
            Sinais de confiança
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            O que torna este espaço mais acolhedor e confiável
          </h2>
          <p className="text-base text-stone-600 md:text-lg">
            A proposta desta página é facilitar a decisão de quem busca ajuda,
            com clareza, coerência e menos atrito no primeiro passo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 md:rounded-[2rem] md:p-8"
            >
              <motion.div
                className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[var(--brand-100)]/40 blur-2xl"
                animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">
                {item.icon}
                <p className="mt-6 text-xl font-semibold text-stone-900">
                  {item.title}
                </p>
                <p className="mt-4 leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
