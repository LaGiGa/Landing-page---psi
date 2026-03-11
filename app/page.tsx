import { AboutPsychologist } from "@/components/AboutPsychologist";
import { Benefits } from "@/components/Benefits";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactForm } from "@/components/ContactForm";
import { EmotionalSection } from "@/components/EmotionalSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ForWho } from "@/components/ForWho";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { TherapyProcess } from "@/components/TherapyProcess";
import { WelcomingSection } from "@/components/WelcomingSection";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ mobileHero?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const mobileHero = resolvedSearchParams?.mobileHero;

  return (
    <main className="min-h-screen pb-20 font-sans selection:bg-[var(--brand-200)] selection:text-[var(--brand-900)] md:pb-0">
      <Header />
      <Hero mobileHero={mobileHero} />
      <WelcomingSection />
      <EmotionalSection />
      <ForWho />
      <Benefits />
      <BlogPreview />
      <TherapyProcess />
      <AboutPsychologist />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
