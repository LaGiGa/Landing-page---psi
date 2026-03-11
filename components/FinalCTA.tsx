"use client";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function FinalCTA() {
  return (
    <section className="bg-[var(--brand-900)] py-16 text-center text-stone-50 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-200)]">
            Próximo passo
          </p>
          <h2 className="mb-5 text-[2rem] font-bold leading-[1.05] tracking-tight md:mb-6 md:text-5xl">
            Se fizer sentido para você, a próxima etapa é simples.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[15px] leading-relaxed text-stone-200/90 md:mb-12 md:text-xl">
            Envie uma mensagem, tire suas dúvidas e entenda com calma como
            funciona o atendimento. Sem pressão para decidir tudo agora.
          </p>
          <Button
            asChild
            size="lg"
            className="mx-auto flex w-full max-w-[20rem] rounded-full bg-[var(--sand-50)] px-5 text-base font-semibold text-[var(--brand-900)] shadow-xl transition-all hover:bg-white hover:shadow-2xl md:max-w-none md:px-8 md:text-lg"
          >
            <Link
              href={createWhatsAppLink(
                "Olá, quero verificar a disponibilidade de atendimento e tirar algumas dúvidas.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <MessageCircle className="mr-2 h-5 w-5 md:mr-3 md:h-6 md:w-6" />
              Ver disponibilidade e tirar dúvidas
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
