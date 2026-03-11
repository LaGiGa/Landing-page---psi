import { blogCategories, getPostsByCategory } from "@/lib/posts";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const POSTS_PER_PAGE = 4;

function createPageHref(page: number, activeCategory: string) {
  const query = new URLSearchParams();

  if (activeCategory !== "Todas") {
    query.set("categoria", activeCategory);
  }

  if (page > 1) {
    query.set("pagina", String(page));
  }

  const queryString = query.toString();
  return queryString ? `/conteudos?${queryString}` : "/conteudos";
}

function createCategoryHref(category: string) {
  const query = new URLSearchParams();

  if (category !== "Todas") {
    query.set("categoria", category);
  }

  const queryString = query.toString();
  return queryString ? `/conteudos?${queryString}` : "/conteudos";
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ categoria?: string; pagina?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const activeCategory = params?.categoria ?? "Todas";
  const currentPage = Math.max(1, Number(params?.pagina ?? "1"));
  const categoryLabel =
    activeCategory === "Todas"
      ? "Saúde emocional, ansiedade e vida adulta"
      : `${activeCategory} e cuidado psicológico`;

  return {
    title:
      currentPage > 1
        ? `Conteúdos sobre ${categoryLabel} | Página ${currentPage}`
        : `Conteúdos sobre ${categoryLabel}`,
    description:
      activeCategory === "Todas"
        ? "Artigos sobre ansiedade, esgotamento, relacionamentos, terapia online e vida adulta para ajudar quem busca mais clareza emocional."
        : `Leituras sobre ${activeCategory.toLowerCase()}, acolhimento emocional e como a terapia pode ajudar na prática.`,
    alternates: {
      canonical: createPageHref(currentPage, activeCategory),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title:
        activeCategory === "Todas"
          ? "Conteúdos sobre saúde emocional"
          : `Conteúdos sobre ${activeCategory}`,
      description:
        activeCategory === "Todas"
          ? "Leituras para compreender melhor ansiedade, esgotamento, relações e vida adulta."
          : `Artigos sobre ${activeCategory.toLowerCase()} e caminhos possíveis de cuidado emocional.`,
      type: "website",
      locale: "pt_BR",
      url: createPageHref(currentPage, activeCategory),
    },
    twitter: {
      card: "summary_large_image",
      title:
        activeCategory === "Todas"
          ? "Conteúdos sobre saúde emocional"
          : `Conteúdos sobre ${activeCategory}`,
      description:
        activeCategory === "Todas"
          ? "Ansiedade, relações, esgotamento e vida adulta em textos objetivos e acolhedores."
          : `Leituras sobre ${activeCategory.toLowerCase()} e como a psicologia pode ajudar.`,
    },
  };
}

export default async function ContentPage({
  searchParams,
}: {
  searchParams?: Promise<{ categoria?: string; pagina?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params?.categoria ?? "Todas";
  const currentPage = Math.max(1, Number(params?.pagina ?? "1"));

  const filteredPosts = getPostsByCategory(activeCategory);
  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);
  const totalPages = Math.max(1, Math.ceil(remainingPosts.length / POSTS_PER_PAGE));
  const normalizedPage = Math.min(currentPage, totalPages);
  const paginatedPosts = remainingPosts.slice(
    (normalizedPage - 1) * POSTS_PER_PAGE,
    normalizedPage * POSTS_PER_PAGE,
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--sand-50)" }}>

      {/* ── HERO SECTION ───────────────────────────── */}
      <section
        className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pt-24 md:pb-20 md:pt-28"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(95,134,115,0.18) 0%, transparent 70%), linear-gradient(180deg, #f4eee5 0%, var(--sand-50) 100%)",
        }}
      >
        {/* Decorative background blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Top-right organic shape */}
          <svg
            className="absolute -right-20 -top-20 h-[340px] w-[340px] opacity-[0.22] sm:h-[460px] sm:w-[460px]"
            viewBox="0 0 460 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M230 20C340 20 440 110 440 230C440 350 350 440 230 440C110 440 20 350 20 230C20 110 120 20 230 20Z"
              fill="var(--brand-300)"
            />
          </svg>

          {/* Bottom-left subtle leaf */}
          <svg
            className="absolute -bottom-16 -left-16 h-[260px] w-[260px] opacity-[0.14] sm:h-[360px] sm:w-[360px]"
            viewBox="0 0 360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="180" cy="180" rx="150" ry="110" fill="var(--brand-500)" />
          </svg>

          {/* Thin decorative line */}
          <div
            className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--brand-500), transparent)",
            }}
          />
        </div>

        {/* Back link */}
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--brand-700)] backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Página principal
          </Link>
        </div>

        {/* Hero copy */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="block h-px w-8 flex-shrink-0"
                style={{ background: "var(--brand-500)" }}
              />
              <p
                className="text-xs font-bold uppercase tracking-[0.26em]"
                style={{ color: "var(--brand-600)" }}
              >
                Saúde emocional
              </p>
            </div>

            {/* H1 */}
            <h1
              className="mt-5 text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl md:text-[3.5rem]"
              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
            >
              Leituras para quem quer se entender melhor.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-500 sm:text-lg">
              Artigos sobre ansiedade, relacionamentos, esgotamento e vida
              adulta — escritos para acolher e trazer clareza.
            </p>

            {/* Stats strip */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { value: "6", label: "artigos publicados" },
                { value: "5", label: "temas cobertos" },
                { value: "~5 min", label: "tempo médio de leitura" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--brand-700)" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-xs text-stone-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
              style={{ fill: "var(--sand-50)" }}
            />
          </svg>
        </div>
      </section>

      {/* ── CONTENT SECTION ─────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">

        {/* Category filter — horizontal scroll on mobile */}
        <div className="relative -mx-4 sm:mx-0">
          <div
            className="flex gap-2 overflow-x-auto px-4 pb-4 pt-8 sm:flex-wrap sm:overflow-x-visible sm:px-0"
            style={{ scrollbarWidth: "none" }}
          >
            {blogCategories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <Link
                  key={category}
                  href={createCategoryHref(category)}
                  className={`inline-flex flex-shrink-0 items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "border-[var(--brand-600)] bg-[var(--brand-600)] text-white shadow-sm"
                      : "border-stone-200 bg-white text-stone-600 hover:border-[var(--brand-400)] hover:text-[var(--brand-700)]"
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured post */}
        {featuredPost ? (
          <article className="mt-4">
            <Link
              href={`/conteudos/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1.1fr_0.9fr]"
            >
              {/* Image */}
              <div className="relative min-h-[240px] md:min-h-[420px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
                {/* Gradient overlay for mobile readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-10">
                <div>
                  {/* Badge */}
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{
                      background: "var(--brand-100)",
                      color: "var(--brand-700)",
                    }}
                  >
                    ✦ Artigo em destaque
                  </span>

                  {/* Meta */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-400">
                    <span
                      className="font-semibold"
                      style={{ color: "var(--brand-600)" }}
                    >
                      {featuredPost.category}
                    </span>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                    <span>·</span>
                    <span>{featuredPost.publishedAt}</span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-stone-900 sm:text-3xl md:text-4xl">
                    {featuredPost.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-4 leading-relaxed text-stone-500 md:text-lg">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* CTA */}
                <div
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--brand-700)" }}
                >
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </article>
        ) : null}

        {/* Posts grid */}
        {paginatedPosts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {paginatedPosts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/conteudos/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-52 flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-stone-400">
                      <span
                        className="font-semibold"
                        style={{ color: "var(--brand-600)" }}
                      >
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="mt-3 flex-1 text-xl font-bold leading-tight tracking-tight text-stone-900">
                      {post.title}
                    </h2>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-500">
                      {post.excerpt}
                    </p>

                    <div
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--brand-700)" }}
                    >
                      Ler artigo
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[1.75rem] border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-stone-800">
              Ainda não há artigos nessa categoria.
            </p>
            <p className="mt-2 text-stone-500">
              Escolha outro tema para ver mais conteúdos.
            </p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <Link
            href={createPageHref(Math.max(1, normalizedPage - 1), activeCategory)}
            aria-disabled={normalizedPage === 1}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              normalizedPage === 1
                ? "pointer-events-none border-stone-200 text-stone-300"
                : "border-stone-300 bg-white text-stone-700 hover:border-[var(--brand-400)] hover:text-[var(--brand-700)]"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Link>

          <span className="min-w-[7rem] text-center text-sm text-stone-500">
            Página {normalizedPage} de {totalPages}
          </span>

          <Link
            href={createPageHref(
              Math.min(totalPages, normalizedPage + 1),
              activeCategory,
            )}
            aria-disabled={normalizedPage === totalPages}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              normalizedPage === totalPages
                ? "pointer-events-none border-stone-200 text-stone-300"
                : "border-stone-300 bg-white text-stone-700 hover:border-[var(--brand-400)] hover:text-[var(--brand-700)]"
            }`}
          >
            Próxima
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
