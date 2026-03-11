"use client";

import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/site";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [topic, setTopic] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const messageLines = [
      "Olá, gostaria de receber um contato sobre atendimento psicológico.",
      name ? `Nome: ${name}` : "",
      contact ? `Contato: ${contact}` : "",
      topic ? `Motivo do contato: ${topic}` : "",
    ].filter(Boolean);

    window.open(createWhatsAppLink(messageLines.join("\n")), "_blank");
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[var(--brand-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,246,242,0.88))] p-6 shadow-sm md:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
              Prefere que eu retorne depois?
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Você também pode enviar seus dados e o motivo do contato.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              Esse formulário continua levando a conversa para o WhatsApp, mas
              ajuda a organizar melhor sua mensagem antes de enviar.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-[var(--brand-200)] bg-white/92 p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-100)] text-[var(--brand-700)]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-tight text-stone-900">
                    Uma forma simples de começar a conversa com mais calma
                  </p>
                  <p className="mt-2 leading-relaxed text-stone-600">
                    Se você preferir, pode escrever brevemente o que está vivendo
                    e deixar seu contato. Assim, sua mensagem já chega mais
                    organizada no WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-stone-700">Nome</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-12 rounded-2xl border border-stone-200 bg-white px-4 text-base outline-none transition-colors focus:border-[var(--brand-500)]"
                  placeholder="Como você gostaria de ser chamado(a)?"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-stone-700">
                  WhatsApp ou e-mail
                </span>
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  className="h-12 rounded-2xl border border-stone-200 bg-white px-4 text-base outline-none transition-colors focus:border-[var(--brand-500)]"
                  placeholder="Seu melhor contato"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-stone-700">
                  Sobre o que você gostaria de falar?
                </span>
                <textarea
                  value={topic}
                  onChange={(event) => setTopic(event.target.value)}
                  rows={5}
                  className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-[var(--brand-500)]"
                  placeholder="Se quiser, escreva brevemente o que está vivendo neste momento."
                />
              </label>

              <Button type="submit" size="lg" className="w-full">
                Enviar pelo WhatsApp
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
