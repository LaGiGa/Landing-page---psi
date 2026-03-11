"use client";

import { siteConfig } from "@/lib/site";
import { motion } from "motion/react";

export function AboutPsychologist() {
  return (
    <section className="bg-stone-50 py-16 md:py-24" id="sobre">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative overflow-hidden rounded-[1.8rem] border border-stone-200 bg-[var(--brand-900)] p-6 text-white shadow-xl md:rounded-[2rem] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(207,221,211,0.18),_transparent_35%),linear-gradient(180deg,_rgba(33,54,47,1),_rgba(24,24,27,1))]" />
              <div className="relative flex min-h-[340px] flex-col justify-between md:min-h-[460px]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl font-semibold md:h-28 md:w-28 md:text-5xl">
                  EN
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-200)]">
                    Perfil profissional
                  </p>
                  <p className="mt-3 text-2xl font-semibold md:text-3xl">
                    {siteConfig.name}
                  </p>
                  <p className="mt-2 text-stone-300">
                    {siteConfig.role} • {siteConfig.credential}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
              Sobre a psicóloga
            </p>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="mb-6 font-medium text-[var(--brand-600)]">
              {siteConfig.role} • {siteConfig.credential}
            </p>

            <div className="space-y-5 text-base leading-relaxed text-stone-600 md:space-y-6 md:text-lg">
              <p>
                Psicóloga clínica com escuta acolhedora e atenção especial a
                jovens adultos que vivem ansiedade, sobrecarga emocional,
                transições de vida e dificuldades nos relacionamentos.
              </p>
              <p>
                O objetivo do atendimento é oferecer um espaço seguro para
                organizar sentimentos, compreender padrões e iniciar um processo
                terapêutico com mais clareza desde a primeira conversa.
              </p>
              <p>
                O acompanhamento pode acontecer de forma online ou presencial,
                respeitando a rotina, a necessidade e o momento de cada pessoa.
              </p>
              <p className="rounded-r-lg border-l-4 border-[var(--brand-500)] bg-stone-100/70 py-2 pl-4 font-medium italic text-stone-800">
                &quot;Buscar ajuda psicológica também pode ser um gesto de cuidado,
                presença e responsabilidade consigo mesma.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
