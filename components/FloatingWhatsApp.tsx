"use client";

import { createWhatsAppLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function FloatingWhatsApp() {
  const href = createWhatsAppLink(
    "Olá, gostaria de falar sobre o atendimento.",
  );

  return (
    <>
      <motion.div
        initial={{ y: 24, opacity: 0, scale: 0.92 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.45 }}
        className="fixed bottom-4 right-4 z-50 md:hidden"
      >
        <div className="relative">
          <motion.span
            aria-hidden="true"
            className="absolute inset-[-8px] rounded-full border border-[var(--brand-300)]/70"
            animate={{ scale: [1, 1.14, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-[-14px] rounded-full bg-[radial-gradient(circle,_rgba(166,192,174,0.28),_transparent_65%)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-600)] text-white shadow-[0_16px_30px_rgba(33,54,47,0.22)]"
              aria-label="Falar pelo WhatsApp"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-white/10"
                animate={{ opacity: [0.14, 0.3, 0.14] }}
                transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              />
              <MessageCircle className="relative h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -6, 0],
        }}
        transition={{
          delay: 0.5,
          duration: 0.45,
          y: {
            delay: 1.2,
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="fixed bottom-6 right-6 z-50 hidden md:block"
      >
        <div className="relative">
          <motion.span
            aria-hidden="true"
            className="absolute inset-[-10px] rounded-full border border-[var(--brand-300)]/70"
            animate={{ scale: [1, 1.16, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-[-16px] rounded-full bg-[radial-gradient(circle,_rgba(166,192,174,0.34),_transparent_65%)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <motion.div whileHover={{ scale: 1.12, rotate: -6 }} whileTap={{ scale: 0.96 }}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-600)] text-white shadow-[0_16px_35px_rgba(33,54,47,0.28)] transition-all duration-300 hover:bg-[var(--brand-700)]"
              aria-label="Falar pelo WhatsApp"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-white/10"
                animate={{ opacity: [0.15, 0.32, 0.15] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <MessageCircle className="relative h-7 w-7" />
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-300)] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full border border-white bg-[var(--brand-500)]"></span>
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
