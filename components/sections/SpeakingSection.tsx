import Link from "next/link";
import Image from "next/image";
import { Mic2, ArrowRight, Calendar, Users, Award, CheckCircle2 } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/constants";

export default function SpeakingSection() {
    const speakingHighlights = [
        {
            title: "Executive & Board Retreats",
            description:
                "High-stakes alignment sessions for corporate boards, state executives, and leadership councils navigating economic turbulence.",
        },
        {
            title: "Keynotes & Pan-African Summits",
            description:
                "High-energy, thought-provoking keynotes bridging servant leadership, institutional character, and bottom-line transformation.",
        },
        {
            title: "Corporate Masterclasses",
            description:
                "Intensive training frameworks covering credit risk, human capital architecture, and strategic operating rhythms.",
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E8EDF4]">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl space-y-2">
                        <div className="inline-flex items-center gap-2">
                            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                GLOBAL KEYNOTES & MASTERCLASSES
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                            Transformative Perspectives for High-Stakes Audiences
                        </h2>
                    </div>

                    <Link
                        href="/speaking"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#072954] hover:text-[#CC9F58] transition-colors shrink-0"
                    >
                        <span>Explore All Speaking Topics</span>
                        <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                    </Link>
                </div>

                {/* Media Feature Card */}
                <div className="rounded-3xl bg-white border border-[#E8EDF4] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs">
                    {/* Left: Speaking Photo */}
                    <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#072954]">
                        <Image
                            src="/images/speaking-stage.jpg"
                            alt="Dr. Immanuelson Sam on Stage"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 500px"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#072954]/60 via-transparent to-transparent lg:hidden" />
                    </div>

                    {/* Right: Narrative & Offerings */}
                    <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2] text-[#072954] text-[10px] font-bold uppercase tracking-widest border border-[#E8EDF4]">
                                Proven On-Stage Stature
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954] leading-snug">
                                Moving Audiences Beyond Motivation to Institutional Execution
                            </h3>
                            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                                Whether addressing 25 board members in a closed-door retreat or 3,000 delegates at a pan-African summit, Dr. Sam delivers practical, measurable paradigms that leaders implement immediately.
                            </p>
                        </div>

                        {/* 3 Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                            {speakingHighlights.map((item, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-2">
                                    <h4 className="font-serif text-sm font-bold text-[#072954]">{item.title}</h4>
                                    <p className="text-xs text-[#4A5568] leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Book a Speaking Engagement</span>
                            </Link>
                            <Link
                                href="/rates"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                            >
                                <span>View Speaking Rates</span>
                                <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Client Logos Preview Strip */}
                <div className="pt-6 border-t border-[#E8EDF4] space-y-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4A5568]">
                        Selected Client Institutional Footprint
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        {CLIENT_LOGOS.slice(0, 8).map((client, idx) => (
                            <span
                                key={idx}
                                className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E8EDF4] text-xs font-semibold text-[#072954]"
                            >
                                {client.name}
                            </span>
                        ))}
                        <Link
                            href="/gallery"
                            className="text-xs font-bold text-[#CC9F58] hover:text-[#072954] transition-colors pl-2"
                        >
                            + {CLIENT_LOGOS.length - 8} More in Archive →
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}