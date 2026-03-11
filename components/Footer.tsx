import { siteConfig } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 py-12 text-stone-400">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
        <p className="text-sm">
          {siteConfig.role} • {siteConfig.credential} • {siteConfig.city}
        </p>
        <div className="mt-8 flex justify-center space-x-6 text-sm">
          <Link
            href="/politica-de-privacidade"
            className="transition-colors hover:text-stone-200"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos-de-uso"
            className="transition-colors hover:text-stone-200"
          >
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
