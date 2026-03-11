"use client";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/site";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const mobileLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
  { href: "/conteudos", label: "Conteúdos" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-stone-900 sm:text-xl"
          >
            Dra. Ester <span className="text-[var(--brand-700)]">Nolasco</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            <Link href="#como-funciona" className="transition-colors hover:text-stone-900">
              Como funciona
            </Link>
            <Link href="#sobre" className="transition-colors hover:text-stone-900">
              Sobre
            </Link>
            <Link href="/conteudos" className="transition-colors hover:text-stone-900">
              Conteúdos
            </Link>
            <Link href="#faq" className="transition-colors hover:text-stone-900">
              FAQ
            </Link>
          </nav>

          <Button asChild size="sm" className="hidden sm:flex">
            <Link
              href={createWhatsAppLink(
                "Olá, gostaria de falar sobre disponibilidade de atendimento.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Ver disponibilidade
            </Link>
          </Button>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm transition-colors hover:bg-stone-50 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-stone-950/25 backdrop-blur-[2px] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-x-4 top-20 z-50 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.14)] md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition-colors hover:bg-stone-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 border-t border-stone-100 pt-4">
                <Link
                  href={createWhatsAppLink(
                    "Olá, gostaria de falar sobre disponibilidade de atendimento.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-600)] px-5 text-sm font-semibold text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar sobre disponibilidade
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
