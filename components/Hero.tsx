"use client";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink, siteConfig } from "@/lib/site";
import { ArrowRight, CalendarCheck2, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const heroHighlights = [
  "Primeiro contato sem pressão",
  "Sessões de 50 minutos",
  "Online e presencial",
];

const mobileHeroVariants = {
  a: {
    eyebrow: "Atendimento online e presencial",
    title: "Cuidar da ansiedade pode começar com uma conversa segura.",
    description:
      "Para quem se sente sobrecarregado, ansioso ou emocionalmente cansado e quer voltar a viver com mais clareza.",
    support: "Você não precisa decidir tudo agora. O primeiro passo pode ser só uma conversa.",
    primaryCta: "Agendar conversa inicial",
    primaryMessage:
      "Olá, quero agendar uma conversa inicial para entender como funciona o atendimento.",
    secondaryLabel: "Tirar dúvidas antes de agendar",
    secondaryMessage:
      "Olá, quero tirar dúvidas antes de decidir se agendo.",
    facts: ["50 minutos", "Palmas - TO", "Online e presencial"],
  },
  b: {
    eyebrow: "Atendimento para ansiedade e sobrecarga emocional",
    title: "Quando a mente não desacelera, a terapia pode ajudar a reorganizar.",
    description:
      "Um espaço de escuta para compreender melhor emoções, aliviar a pressão e retomar a rotina com mais equilíbrio.",
    support: "Sem pressa, sem julgamento e com clareza sobre como funciona o atendimento.",
    primaryCta: "Quero entender como funciona",
    primaryMessage:
      "Olá, quero entender como funciona o atendimento neste momento.",
    secondaryLabel: "Falar antes de decidir",
    secondaryMessage:
      "Olá, quero conversar antes de decidir se agendo.",
    facts: ["Primeiro contato simples", "Palmas - TO", "Atendimento acolhedor"],
  },
  c: {
    eyebrow: "Psicóloga clínica em Palmas - TO",
    title: "Você não precisa lidar sozinho com o que tem pesado por dentro.",
    description:
      "Terapia com acolhimento, escuta e clareza para quem quer entender melhor o próprio momento e começar com segurança.",
    support: "O primeiro passo pode ser só tirar dúvidas e entender se este é o momento certo para você.",
    primaryCta: "Dar o primeiro passo",
    primaryMessage:
      "Olá, quero dar o primeiro passo e saber como funciona o atendimento.",
    secondaryLabel: "Tirar minhas dúvidas",
    secondaryMessage:
      "Olá, quero tirar minhas dúvidas antes de agendar.",
    facts: ["Online e presencial", "50 minutos", "Palmas - TO"],
  },
} as const;

type MobileHeroKey = keyof typeof mobileHeroVariants;

export function Hero({ mobileHero }: { mobileHero?: string }) {
  const hero = siteConfig.activeHeroVariant;
  const selectedMobileHero =
    mobileHero && mobileHero in mobileHeroVariants
      ? mobileHeroVariants[mobileHero as MobileHeroKey]
      : mobileHeroVariants.b;

  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(95,134,115,0.18),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.62),_rgba(246,241,233,0.98))]" />
      <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(90deg,transparent,rgba(95,134,115,0.08),transparent)] opacity-70" />

      <div className="container relative mx-auto px-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-md"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[var(--brand-200)] bg-white/90 px-3 py-1 text-[11px] font-medium text-[var(--brand-700)] shadow-sm">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-[var(--brand-500)]" />
            {selectedMobileHero.eyebrow}
          </div>

          <h1 className="max-w-sm text-[2rem] font-bold leading-[0.98] tracking-tight text-stone-950">
            {selectedMobileHero.title}
          </h1>

          <p className="mt-5 text-[15px] leading-relaxed text-stone-700">
            {selectedMobileHero.description}
          </p>

          <div className="mt-5 rounded-[1.25rem] border border-[var(--brand-200)] bg-white/85 p-4 text-sm leading-relaxed text-stone-600 shadow-sm">
            {selectedMobileHero.support}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <Button asChild size="lg" className="w-full">
              <Link
                href={createWhatsAppLink(selectedMobileHero.primaryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                {selectedMobileHero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Link
              href={createWhatsAppLink(selectedMobileHero.secondaryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[var(--brand-300)] bg-white/70 px-5 py-4 text-sm font-medium text-[var(--brand-700)] shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              {selectedMobileHero.secondaryLabel}
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {selectedMobileHero.facts.map((fact) => (
              <div
                key={fact}
                className="rounded-2xl border border-stone-200/80 bg-white/85 px-4 py-3 text-sm text-stone-700 shadow-sm"
              >
                {fact}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container relative mx-auto hidden max-w-6xl px-4 md:block">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-[var(--brand-200)] bg-white/90 px-3 py-1 text-[11px] font-medium text-[var(--brand-700)] shadow-sm sm:text-sm">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-[var(--brand-500)]"></span>
              {siteConfig.serviceModes}
            </div>

            <h1 className="mb-4 max-w-2xl text-[1.95rem] font-bold leading-[0.98] tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-stone-700 sm:text-xl">
              {hero.description}
            </p>

            <div className="mb-5 rounded-[1.2rem] border border-[var(--brand-200)] bg-white/85 p-4 text-sm leading-relaxed text-stone-600 shadow-sm sm:rounded-[1.5rem]">
              {hero.supportingLine}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  href={createWhatsAppLink(hero.primaryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  {hero.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link
                  href={createWhatsAppLink(hero.secondaryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {hero.secondaryCta}
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-stone-500 sm:text-sm">
              Um caminho simples para quem quer entender melhor o próprio momento
              e iniciar o atendimento com mais segurança.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-stone-600 sm:grid-cols-3">
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.35 }}
                  className="rounded-2xl border border-stone-200/80 bg-white/85 px-4 py-3 shadow-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-8 h-20 w-20 rounded-full border border-[var(--brand-200)] bg-white/30 blur-sm sm:-left-8 sm:h-28 sm:w-28" />
            <div className="absolute -bottom-6 right-6 h-20 w-20 rounded-full bg-[var(--brand-100)]/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/70 bg-[var(--brand-900)] p-4 text-stone-50 shadow-2xl shadow-[rgba(33,54,47,0.14)] sm:rounded-[2rem] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(207,221,211,0.18),_transparent_30%),linear-gradient(160deg,_rgba(33,54,47,1),_rgba(42,50,48,0.98))]" />
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="relative space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.45 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm sm:rounded-3xl sm:p-5"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand-200)]">
                    Atendimento
                  </p>
                  <p className="mt-3 text-xl font-semibold sm:text-3xl">
                    Mais clareza para viver a rotina com menos peso.
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-200">
                    Atendimento voltado a ansiedade, exaustão emocional,
                    transições da vida adulta e dificuldades nos vínculos.
                  </p>
                </motion.div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[1.5rem] bg-[var(--sand-50)] p-4 text-stone-900 sm:rounded-3xl sm:p-5"
                  >
                    <CalendarCheck2 className="h-8 w-8 text-[var(--brand-700)]" />
                    <p className="mt-4 text-sm font-medium text-stone-500">
                      Primeiro passo
                    </p>
                    <p className="mt-1 text-base font-semibold sm:text-xl">
                      Conversa inicial pelo WhatsApp
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.52, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 sm:rounded-3xl sm:p-5"
                  >
                    <MapPin className="h-8 w-8 text-[var(--brand-200)]" />
                    <p className="mt-4 text-sm font-medium text-[var(--brand-100)]/80">
                      Formato
                    </p>
                    <p className="mt-1 text-base font-semibold sm:text-xl">
                      {siteConfig.city}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="rounded-[1.5rem] border border-white/10 bg-black/15 p-4 sm:rounded-3xl sm:p-5"
                >
                  <p className="text-sm text-stone-300">Primeiro contato com clareza</p>
                  <p className="mt-2 text-base leading-relaxed text-stone-100 sm:text-lg">
                    Um espaço pensado para acolher, informar e facilitar o início
                    do atendimento com mais tranquilidade.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
