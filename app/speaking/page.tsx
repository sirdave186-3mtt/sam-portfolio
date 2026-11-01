import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Mic2,
    ArrowRight,
    Calendar,
    Download,
    ShieldCheck,
    Users2,
    Sparkles,
    Building2,
    CheckCircle2,
    ArrowUpRight
} from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Keynotes & Speaking Engagements | Dr. Immanuelson Sam",
    description:
        "Book Dr. Immanuelson Sam for executive keynotes, corporate masterclasses, and board retreats on servant leadership, change, and risk management.",
};

const KEYNOTE_TOPICS = [
    {
        number: "01",
        tag: "LEADERSHIP & GOVERNANCE",
        title: "Servant Leadership: The Architecture of Enduring Institutions",
        description:
            "A strategic dissection of ethical authority, leadership accountability, and how values-driven executives build high-performance institutional cultures that outlive macroeconomic upheaval.",
        target: "C-Suite Executives, State Cabinets, Industry Summits",
    },
    {
        number: "02",
        tag: "ORGANIZATIONAL TRANSFORMATION",
        title: "Commanding Change: Leading Through Disruption & Crisis",
        description:
            "Equipping leaders with ethical stewardship models that build high-trust, resilient organizations capable of executing under volatility without culture collapse.",
        target: "Corporate Boards, Ministries, Leadership Retreats",
    },
    {
        number: "03",
        tag: "GOVERNANCE & RISK",
        title: "Navigating Volatility: Strategic Risk & Balance-Sheet Discipline",
        description:
            "Synthesizing almost two decades of commercial banking and turnaround consulting into actionable risk governance, liquidity preservation, and operational resilience.",
        target: "Financial Institutions, Commercial Boards, MSME Summits",
    },
    {
        number: "04",
        tag: "EXECUTIVE PRODUCTIVITY",
        title: "Time Code: Operating Systems for Peak Performance",
        description:
            "Based on Dr. Sam's acclaimed book, this session delivers practical protocols to eliminate cognitive burnout, protect executive attention, and ensure consistent strategic output.",
        target: "Executive Committees, Tech Leaders, Annual Conferences",
    },
    {
        number: "05",
        tag: "HUMAN CAPITAL",
        title: "The School of Talents: Bridging Potential & Institutional Value",
        description:
            "Deconstructing workforce readiness and organizational capability. How institutions can systematically attract, align, and retain high-caliber talent in emerging markets.",
        target: "Human Resource Executives, Enterprise Boards, Universities",
    },
    {
        number: "06",
        tag: "CONTINENTAL STRATEGY",
        title: "The African Mandate: Raising Purpose-Driven Transformational Leaders",
        description:
            "A visionary call to generational excellence, exploring how emerging African leaders can bridge competency gaps and build global-standard enterprises.",
        target: "Pan-African Summits, Youth Conventions, Global Forums",
    },
];

export default function SpeakingPage() {
    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Section 1: Executive Split Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8EDF4] pb-12">

                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    KEYNOTES & CORPORATE MASTERCLASSES
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Keynote Addresses & <br />
                                <span className="italic text-[#CC9F58]">Executive Masterclasses</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                High-impact, transformational addresses tailored for corporate boards, national summits,
                                and industry conferences seeking clarity, discipline, and measurable strategic traction.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Calendar className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Request Keynote Quote</span>
                                </Link>
                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Download className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Speaker Kit (PDF)</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <Mic2 className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Platform Reach & Impact
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">SPEAK-METRICS</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">10,000+</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Leaders & Executives Reached</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Global</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">In-Person & Virtual Masterclasses</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">6 Core</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Signature Executive Topics</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">CMC®</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Certified Management Consultant Rigor</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Advisory Practice</p>
                                        <a
                                            href={SITE_METADATA.firmWebsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] text-[#CC9F58] hover:underline inline-flex items-center gap-1 font-medium"
                                        >
                                            <span>Goldenmuv Consulting</span>
                                            <ArrowUpRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#072954] hover:text-[#CC9F58] transition-colors"
                                    >
                                        <span>Check Dates</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Section 2: Keynote Spotlight / Stage Feature */}
                    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#E8EDF4] shadow-md bg-[#072954]">
                        <Image
                            src="/images/gallery/gallery-25.jpg"
                            alt="Dr. Immanuelson Sam Keynote & Masterclass Facilitation"
                            fill
                            sizes="(max-width: 1280px) 100vw, 1200px"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#072954]/85 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div className="space-y-1 text-white">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-[#CC9F58]">
                                    On-Stage Delivery
                                </span>
                                <p className="font-serif text-lg sm:text-xl font-bold">
                                    Commanding Clarity for Boardrooms, Cabinets & Summits
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto shadow-sm"
                            >
                                <span>Request Speaker Booking</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Section 3: Signature Keynote Curricula Grid */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">
                                Signature Keynote Curricula
                            </h2>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#CC9F58]">
                                Customizable by Audience
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {KEYNOTE_TOPICS.map((topic) => (
                                <div
                                    key={topic.number}
                                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] transition-all duration-200 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-md group"
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono font-bold text-[#4A5568]">
                                                #{topic.number}
                                            </span>
                                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#072954] px-2.5 py-0.5 rounded bg-[#FAF7F2] border border-[#E8EDF4]">
                                                {topic.tag}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-xl font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors leading-snug">
                                            {topic.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                            {topic.description}
                                        </p>

                                        <div className="pt-2 flex items-center gap-2 text-xs text-[#072954]/80">
                                            <Users2 className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                            <span className="font-medium truncate">
                                                <strong>Target:</strong> {topic.target}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-xs pt-4 border-t border-[#E8EDF4]">
                                        <Link
                                            href="/contact"
                                            className="font-semibold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                        >
                                            Request Quote
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-1 font-bold text-[#072954] hover:text-[#CC9F58] transition-colors"
                                        >
                                            <span>Book Topic</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-[#CC9F58] group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: Bottom Callout */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold !text-white">
                            Planning a Major Summit or Corporate Board Retreat?
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Dr. Sam customizes each address to your specific institutional challenges, strategic roadmap, and audience profile.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                            >
                                <span>Check Availability & Inquire</span>
                                <ArrowRight className="w-4 h-4 text-[#072954]" />
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}