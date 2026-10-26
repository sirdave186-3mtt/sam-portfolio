import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/ui/LogoMarquee";
import MandateSection from "@/components/sections/MandateSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import LiterarySection from "@/components/sections/LiterarySection";
import BecomingSection from "@/components/sections/BecomingSection";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. Executive Hero */}
        <HeroSection />

        {/* 2. Live Infinite Client Logos Marquee */}
        <LogoMarquee />

        {/* 3. The Mandate & Biography Teaser */}
        <MandateSection />

        {/* 4. Speaking & Masterclasses Highlight */}
        <SpeakingSection />

        {/* 5. Published Work: "Time Code" */}
        <LiterarySection />

        {/* 6. The Becoming Community Incubator */}
        <BecomingSection />

        {/* 7. Conversion Callout Strip to Dedicated Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-surface border-t border-brand-border">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-brand-card via-[#151922] to-brand-card border border-brand-gold-border/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold-border text-brand-gold text-[10px] font-bold uppercase tracking-widest">
              Ready to Collaborate?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Transform Your Organization&apos;s Leadership
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore our transparent rates or initiate a private conversation with Dr. Immanuelson Sam&apos;s advisory office today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Dr. Sam to Speak</span>
              </Link>
              <Link
                href="/rates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-brand-border bg-brand-surface hover:bg-brand-card text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-gold" />
                <span>View Full Rate Schedule</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}