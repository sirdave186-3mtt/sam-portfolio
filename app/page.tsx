import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatStrip from "@/components/ui/StatStrip";
import LogoMarquee from "@/components/ui/LogoMarquee";
import BookSpotlight from "@/components/sections/BookSpotlight";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Mic2, Compass, Users, ArrowUpRight, ArrowRight } from "lucide-react";

export default function HomePage() {
  const pillars = [
    {
      icon: Mic2,
      tag: "Keynotes & Summits",
      title: "Keynote Speaking & Masterclasses",
      description:
        "Addressing governance councils, board retreats, and executive conferences on servant leadership, change, and risk optimization.",
      href: "/speaking",
      cta: "Explore Speaking Topics",
    },
    {
      icon: Compass,
      tag: "GMPC Practice",
      title: "Strategic Advisory & Consulting",
      description:
        "Guiding C-suite executives, state governors, and federal institutions through institutional transformation and capital preservation.",
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
      cta: "View Field Gallery",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-800 flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. Navy Hero Canvas */}
        <HeroSection />

        {/* 2. Ivory Stat Strip */}
        <StatStrip />

        {/* 3. Live Motion Client Marquee on Mist */}
        <LogoMarquee />

        {/* 4. Three Executive Pillars (Pure White Canvas) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8EDF4] pb-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                  HOW I HELP
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                  Insight that Creates Impact
                </h2>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#072954] hover:text-[#CC9F58] transition-colors"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8EDF4] flex items-center justify-center text-[#CC9F58] group-hover:bg-[#CC9F58] group-hover:text-white transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#072954] px-2.5 py-1 rounded bg-[#FAF7F2]">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E8EDF4]">
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors"
                      >
                        <span>{pillar.cta}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#CC9F58]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Compact Book Spotlight */}
        <BookSpotlight />

        {/* 6. High-Trust Booking Callout */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#072954] text-white text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#CC9F58] text-[10px] font-bold uppercase tracking-widest border border-white/10">
              Executive Advisory & Speaking
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold">
              Engage Dr. Immanuelson Sam for Your Next Milestone
            </h2>
            <p className="text-[#E8EDF4] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              From physical summit keynotes and board retreats to confidential C-suite advisory,
              partner with Dr. Sam to turn uncertainty into institutional triumph.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Initiate Booking Inquiry
              </Link>
              <Link
                href="/rates"
                className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/40 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Review Rate Schedule
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}