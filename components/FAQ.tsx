"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site";
import { motion } from "motion/react";

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento para entender sua demanda, explicar como funciona o atendimento e alinhar se a proposta faz sentido para este momento.",
  },
  {
    question: "A terapia é confidencial?",
    answer:
      "Sim. Tudo o que é conversado em sessão é protegido por sigilo profissional, conforme os princípios éticos da psicologia.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Em geral, cada sessão dura 50 minutos. A frequência costuma ser semanal, mas pode ser combinada de acordo com a necessidade do acompanhamento.",
  },
  {
    question: "O atendimento pode ser online?",
    answer: `Sim. O atendimento acontece de forma ${siteConfig.serviceModes.toLowerCase()}, respeitando a preferência e a rotina de cada pessoa.`,
  },
  {
    question: "Como os valores são informados?",
    answer:
      "Os valores podem ser apresentados no primeiro contato, junto com as informações sobre formato, frequência e disponibilidade.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Basta clicar em qualquer botão de contato da página. O link abre uma conversa no WhatsApp para tirar dúvidas e verificar a disponibilidade.",
  },
];

export function FAQ() {
  return (
    <section className="bg-stone-50 py-24" id="faq">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
            Objeções e dúvidas
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Dúvidas frequentes
          </h2>
          <p className="text-lg text-stone-600">
            As respostas abaixo ajudam a reduzir a insegurança comum de quem
            está começando terapia.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-stone-200 bg-white px-6"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-stone-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-stone-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
