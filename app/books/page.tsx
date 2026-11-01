import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    BookOpen,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Building2,
    Award,
    Calendar,
    Download,
    BookmarkCheck,
    ShieldCheck,
    Users2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Books & Published Works | Dr. Immanuelson Sam",
    description:
        "Explore published works by Dr. Immanuelson Sam, including 'The Time Code' (foreword by Dr. Linus Okorie MFR) and 'The School of Talents'. Order individual copies and corporate bulk shipments.",
};

const TIME_CODE_CHAPTERS = [
    {
        module: "Chapter 1–3",
        title: "The Architecture of Executive Time",
        summary:
            "Deconstructing the psychological illusion of busyness. Establishing hard boundaries between reactive firefighting and high-leverage strategic stewardship.",
    },
    {
        module: "Chapter 4–6",
        title: "Eliminating Cognitive Leaks & Friction",
        summary:
            "A systematic operating model to audit energy leaks, streamline decision fatigue, and build high-focus routines under macroeconomic stress.",
    },
    {
        module: "Chapter 7–9",
        title: "Leading Teams with Temporal Discipline",
        summary:
            "How institutional leaders build cultures of punctuality, clarity, and accountable execution without generating workforce burnout.",
    },
    {
        module: "Chapter 10–12",
        title: "The Legacy Framework & Sustainable Purpose",
        summary:
            "Aligning daily calendar allocations with long-term institutional legacy, personal destiny, and servant leadership principles.",
    },
];

const TALENTS_CHAPTERS = [
    {
        module: "Module 1–2",
        title: "The Talent Dilemma & Market Realities",
        summary:
            "Deconstructing why thousands of graduates compete for the same elite corporate positions and why academic brilliance alone rarely secures employment.",
    },
    {
        module: "Module 3–4",
        title: "Character, Competence & Executive Packaging",
        summary:
            "How to audit and package your core capabilities into high-demand competencies that institutional recruiters and multinational employers prioritize.",
    },
    {
        module: "Module 5–6",
        title: "Navigating High-Stakes Assessments",
        summary:
            "Battle-tested strategies for mastering corporate assessment centers, panel interviews, and case study evaluations.",
    },
    {
        module: "Module 7–8",
        title: "Workplace Supremacy & Rapid Ascension",
        summary:
            "The unspoken rules of boardroom etiquette, value generation, and establishing indispensable professional value from day one.",
    },
];

export default function BooksPage() {
    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Executive Split Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8EDF4] pb-12">

                        {/* Left Column: Heading & Executive Mission (7 cols) */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    PUBLISHED WORKS & EXECUTIVE BLUEPRINTS
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Literary Thought Leadership & <br />
                                <span className="italic text-[#CC9F58]">High-Performance Principles</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                Dr. Immanuelson Sam&apos;s published works translate boardroom consulting frameworks,
                                personal time mastery, and career execution into practical handbooks for leaders and rising professionals.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Building2 className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Request Corporate Bulk Order</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <span>Order Individual Copies</span>
                                    <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Literary Snapshot Card (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Literary Profile & Reach
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">ISBN-AUTH</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">2 Titles</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">The Time Code & The School of Talents</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">MFR</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Foreword by Dr. Linus Okorie MFR</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Corporate</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Executive Cohort & Workforce Distribution</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">50+</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Copies Qualify for Volume Institutional Discounts</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Author Keynote Bundles</p>
                                        <p className="text-[11px] text-[#4A5568]">Books + Executive On-Site Session</p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                    >
                                        <span>Inquire</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* SPOTLIGHT 1: THE TIME CODE */}
                    <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center shadow-xs">
                        {/* Left: Video Mockup */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CC9F58]/30 bg-[#072954]">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/time-code.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* Right: Narrative & Highlights */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC9F58]/15 border border-[#CC9F58]/40 text-[#072954] text-[10px] font-bold uppercase tracking-widest">
                                    <Sparkles className="w-3 h-3 text-[#CC9F58]" />
                                    <span>Flagship Publication</span>
                                </div>

                                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954] leading-tight">
                                    The Time Code: <br />
                                    <span className="italic text-[#CC9F58]">How Every Moment Shapes Your Future</span>
                                </h2>

                                <div className="flex items-center gap-2 text-xs font-semibold text-[#072954] pt-1">
                                    <Award className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Foreword by Dr. Linus Okorie MFR</span>
                                </div>
                            </div>

                            <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed">
                                The untold secrets of how ordinary people use time to build extraordinary lives.
                                Written not as a theoretical treatise, but as a battle-tested operating system
                                distilled from corporate boardrooms and governance institutions across Africa.
                            </p>

                            <div className="space-y-2.5 text-xs sm:text-sm text-[#072954] font-medium">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Stop wasting time and start living and leading with intention</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Overcome procrastination, distraction, and chronic decision fatigue</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Reclaim time as your most powerful asset for building enduring legacy</span>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                                >
                                    <Building2 className="w-4 h-4" />
                                    <span>Request Corporate Bulk Order</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <span>Order Individual Copy</span>
                                    <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* SPOTLIGHT 2: THE SCHOOL OF TALENTS */}
                    <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center shadow-xs">
                        {/* Left: Video Mockup */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CC9F58]/30 bg-[#072954]">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/talent.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* Right: Narrative & Highlights */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC9F58]/15 border border-[#CC9F58]/40 text-[#072954] text-[10px] font-bold uppercase tracking-widest">
                                    <Sparkles className="w-3 h-3 text-[#CC9F58]" />
                                    <span>Human Capital & Career Strategy</span>
                                </div>

                                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954] leading-tight">
                                    The School of Talents: <br />
                                    <span className="italic text-[#CC9F58]">Joining the Ones Who Get Hired</span>
                                </h2>

                                <div className="flex items-center gap-2 text-xs font-semibold text-[#072954] pt-1">
                                    <Award className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Dr. Immanuelson Sam</span>
                                </div>
                            </div>

                            <div className="space-y-3 text-[#4A5568] text-sm sm:text-base leading-relaxed">
                                <p>
                                    Ask most people their choice of career and they name the same few prestigious employers:
                                    top management consulting firms, Shell, Exxon Mobil, GT Bank, NNPC, and the likes.
                                    Yet very few of them are ever hired.
                                </p>
                                <p>
                                    Africa&apos;s graduates are talented. They are just not prepared.
                                    With youth unemployment affecting tens of millions of rising professionals,
                                    this book delivers the exact tactical roadmap showing you how to stand out,
                                    command executive attention, and join the ones who get hired.
                                </p>
                            </div>

                            <div className="space-y-2.5 text-xs sm:text-sm text-[#072954] font-medium">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Demystifying the institutional hiring standards of elite corporate firms</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Converting raw degrees into commercial competence and boardroom value</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Essential workplace etiquette, assessment center mastery, and career longevity</span>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                                >
                                    <Building2 className="w-4 h-4" />
                                    <span>Institutional Bulk Orders</span>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <span>Order Individual Copy</span>
                                    <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Core Modules Breakdown */}
                    <div className="space-y-12">

                        {/* The Time Code Modules */}
                        <div className="space-y-6">
                            <div className="border-b border-[#E8EDF4] pb-3">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    CURRICULUM BREAKDOWN
                                </span>
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">
                                    Inside &quot;The Time Code&quot;
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {TIME_CODE_CHAPTERS.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-white border border-[#E8EDF4] space-y-2 shadow-xs"
                                    >
                                        <span className="text-[10px] uppercase font-bold text-[#CC9F58] tracking-widest">
                                            {item.module}
                                        </span>
                                        <h4 className="font-serif text-base font-bold text-[#072954]">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-[#4A5568] leading-relaxed">
                                            {item.summary}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* The School of Talents Modules */}
                        <div className="space-y-6">
                            <div className="border-b border-[#E8EDF4] pb-3">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    CAREER ROADMAP
                                </span>
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">
                                    Inside &quot;The School of Talents&quot;
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {TALENTS_CHAPTERS.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-white border border-[#E8EDF4] space-y-2 shadow-xs"
                                    >
                                        <span className="text-[10px] uppercase font-bold text-[#CC9F58] tracking-widest">
                                            {item.module}
                                        </span>
                                        <h4 className="font-serif text-base font-bold text-[#072954]">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-[#4A5568] leading-relaxed">
                                            {item.summary}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Retainer / Bulk Order Callout */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold !text-white">
                            Equip Your Organization with Author Keynotes & Book Bundles
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Special volume licensing, corporate consignments, and customized author keynotes are available
                            for universities, corporations, banks, and state ministries ordering 50+ copies of either title.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                            >
                                <span>Inquire for Corporate Bulk Orders</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}