import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Mic2,
  Compass,
  Users,
  BookOpen,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function HomePage() {
  const practicePillars = [
    {
      icon: Mic2,
      tag: "Keynotes & Summits",
      title: "Keynote Speaking & Masterclasses",
      description:
        "Addressing governance councils, board retreats, and pan-African summits on servant leadership, change, and risk optimization[cite: 3, 6, 7].",
      href: "/speaking",
      cta: "Explore Speaking Topics",
    },
    {
      icon: Compass,
      tag: "GMPC Practice",
      title: "Strategic Advisory & Consulting",
      description:
        "Guiding C-suite executives, state governors, and federal institutions through institutional transformation and capital preservation[cite: 2, 3, 16].",
      href: "/rates",
      cta: "View Services & Rates",
    },
    {
      icon: Users,
      tag: "Ecosystem Mentorship",
      title: "The Becoming Community",
      description:
        "A continental leadership incubator nurturing future-ready African changemakers and founders equipped with character and execution.",
      href: "/gallery",
      cta: "View Training Archive",
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. Executive Hero Frame */}
        <HeroSection />

        {/* 2. Live Motion Client Marquee */}
        <LogoMarquee />

        {/* 3. The Three Executive Pillars (Compact Portal Grid) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg relative">
          <div className="max-w-7xl mx-auto space-y-12">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-8">
              <div className="max-w-2xl space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  <span className="w-6 h-[1px] bg-brand-gold" />
                  Areas of Impact
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Strategic Advisory & Thought Leadership
                </h2>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
              >
                <span>Read Full Biography & Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3-Card Balanced Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practicePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-brand-card/70 border border-brand-border hover:border-brand-gold-border/60 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold transition-colors">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold px-2.5 py-1 rounded-full bg-brand-surface border border-brand-border">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-border/60">
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold-light hover:text-white transition-colors"
                      >
                        <span>{pillar.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. Compact Literary Feature Banner ("Time Code") */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-surface border-y border-brand-border">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-brand-card via-[#151922] to-brand-card border border-brand-border p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

              <div className="max-w-2xl space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold-border text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  Published Authority
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  TIME CODE: <span className="text-brand-gold italic">Unlocking Peak Performance & Purpose</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A battle-tested blueprint for executives, founders, and leaders to master their time, eliminate productivity leaks, and deliver consistent strategic outcomes under pressure[cite: 1, 2, 3].
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <Link
                  href="/books"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-gold-border bg-brand-surface hover:bg-brand-bg text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore The Book</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-gold-glow"
                >
                  <span>Order Team Copies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Minimal High-Conversion Booking Strip */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg relative">
          <div className="max-w-4xl mx-auto rounded-3xl bg-brand-surface border border-brand-gold-border/40 p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold-border text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                Executive Engagements
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engage Dr. Immanuelson Sam
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                Whether booking a physical keynote, board retreat facilitation, or a private advisory session, partner with Dr. Sam to turn uncertainty into institutional triumph[cite: 3, 6, 7].
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
              >
                <Calendar className="w-4 h-4" />
                <span>Initiate Booking Inquiry[cite: 17]</span>
              </Link>
              <Link
                href="/rates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-surface text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>Review Official Rate Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}