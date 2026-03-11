import { blogPosts } from "@/lib/posts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogPreview() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#f6f1e9] py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-600)]">
              Conteúdos sobre saúde emocional
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Leituras para quem quer compreender melhor o que está vivendo.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">
              Textos sobre ansiedade, relações, esgotamento e temas da vida
              adulta que ajudam a transformar sofrimento difuso em entendimento.
            </p>
          </div>

          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-700)]"
          >
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/conteudos/${post.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-[var(--brand-600)]">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900">
                    {post.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-700)]">
                    Ler artigo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
