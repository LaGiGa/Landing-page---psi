import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const canonicalPath = `/conteudos/${post.slug}`;

  return {
    title: `${post.title} | Conteúdos`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "pt_BR",
      url: canonicalPath,
      publishedTime: new Date("2026-03-11").toISOString(),
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <main className="min-h-screen pb-24 pt-20" style={{ background: "var(--sand-50)" }}>
      
      {/* ── BREADCRUMB / TOP NAVIGATION ──────────────── */}
      <nav className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 transition-colors hover:text-[var(--brand-700)]"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
          <span className="h-4 w-px bg-stone-300" />
          <Link
            href="/conteudos"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 transition-colors hover:text-[var(--brand-700)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Todos os conteúdos
          </Link>
        </div>
      </nav>

      {/* ── ARTICLE CONTENT ────────────────────────── */}
      <article className="mx-auto max-w-4xl px-4">
        
        {/* Main Card Container */}
        <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-sm">
          
          {/* Hero Image Section */}
          <div className="relative h-[300px] w-full sm:h-[450px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            {/* Soft decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
          </div>

          <div className="px-6 py-10 md:px-16 md:py-16">
            
            {/* Category & Badge */}
            <div className="flex items-center gap-3">
              <span
                className="block h-px w-8 flex-shrink-0"
                style={{ background: "var(--brand-500)" }}
              />
              <p
                className="text-xs font-bold uppercase tracking-[0.26em]"
                style={{ color: "var(--brand-600)" }}
              >
                {post.category}
              </p>
            </div>

            {/* Title */}
            <h1 
              className="mt-6 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-serif, Georgia, serif)" }}
            >
              {post.title}
            </h1>

            {/* Post Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-stone-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand-400)" }} />
                <span>Escrito pela Dra. Ester Nolasco</span>
              </div>
              <span className="h-4 w-px bg-stone-200" />
              <span>{post.readTime} de leitura</span>
              <span className="h-4 w-px bg-stone-200" />
              <span>{post.publishedAt}</span>
            </div>

            {/* Excerpt/Intro */}
            <p className="mt-8 text-lg italic leading-relaxed text-stone-600 border-l-4 pl-6" style={{ borderColor: 'var(--brand-200)' }}>
              {post.excerpt}
            </p>

            {/* Body Sections */}
            <div className="mt-12 space-y-12">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-6 text-lg leading-relaxed text-stone-700">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Article Footer / CTA */}
            <div className="mt-20 rounded-3xl p-8 bg-stone-50 border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900">Precisa lidar melhor com isso?</h3>
              <p className="mt-2 text-stone-600">
                O acompanhamento profissional oferece um espaço seguro para transformar incerteza em clareza.
              </p>
              <Link 
                href="/#contato" 
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] shadow-md"
                style={{ background: 'var(--brand-600)' }}
              >
                Agendar conversa com a Dra. Ester
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ── RELATED POSTS ──────────────────────────── */}
      <section className="mx-auto mt-24 max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.26em]" style={{ color: "var(--brand-600)" }}>
            Aprofunde seu entendimento
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Artigos relacionados
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <article key={relatedPost.slug}>
              <Link
                href={`/conteudos/${relatedPost.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-stone-400">
                    <span className="font-semibold" style={{ color: "var(--brand-600)" }}>
                      {relatedPost.category}
                    </span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="mt-4 flex-1 text-xl font-bold leading-tight text-stone-900">
                    {relatedPost.title}
                  </h3>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-700)" }}>
                    Ler artigo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
