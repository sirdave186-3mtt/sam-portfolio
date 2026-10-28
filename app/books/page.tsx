import type { Metadata } from "next";
import Image from "next/image";
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
    BookmarkCheck
} from "lucide-react";

export const metadata: Metadata = {
    title: "The Time Code | Books & Publications by Dr. Immanuelson Sam",
    description:
        "The Time Code: How Every Moment Shapes Your Future by Dr. Immanuelson Sam. Foreword by Dr. Linus Okorie MFR. Order individual copies and team bulk shipments.",
};

const CHAPTER_HIGHLIGHTS = [
    {
        module: "Chapter 1–3",
        title: "The Architecture of Executive Time",
        summary:
            "Deconstructing the psychological illusion of busyness. Establishing hard boundaries between reactive fire-fighting and high-leverage strategic stewardship.",
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
                                Dr. Immanuelson Sam&apos;s published works translate executive consulting frameworks
                                into actionable handbooks for professionals, entrepreneurs, and institutions.
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
                                    <span>Order Individual Copy</span>
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
                                            Publication Profile
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">ISBN-AUTH</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">Time Code</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Flagship Executive Operating Handbook[cite: 5]</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">MFR</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Foreword by Dr. Linus Okorie MFR[cite: 5]</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">12</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Actionable Core Strategy & Life Modules</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">50+</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Copies Qualify for Volume Institutional Rates</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Author Keynote Bundles</p>
                                        <p className="text-[11px] text-[#4A5568]">Bundled Book Deliveries + Executive Keynote</p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                    >
                                        <span>Order</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Book Spotlight Card */}
                    <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center shadow-xs">
                        {/* Left Column: 3D Book Presentation Mockup */}
                        <div className="lg:col-span-6 flex justify-center">
                            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CC9F58]/30 bg-[#072954] group">
                                <Image
                                    src="/images/time-code-book.jpg"
                                    alt="The Time Code by Dr. Immanuelson Sam - Foreword by Dr. Linus Okorie MFR"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 500px"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Right Column: Book Narrative */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CC9F58]/15 border border-[#CC9F58]/40 text-[#072954] text-[10px] font-bold uppercase tracking-widest">
                                    <Sparkles className="w-3 h-3 text-[#CC9F58]" />
                                    <span>Out Now • Flagship Release</span>
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
                                The untold secrets of how ordinary people use time to build extraordinary lives[cite: 5].
                                Written not as a theoretical treatise, but as a battle-tested operating system
                                unpacked from corporate boardrooms and governance institutions across Africa.
                            </p>

                            <div className="space-y-2.5 text-xs sm:text-sm text-[#072954] font-medium">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Stop wasting time and start living and leading with intention[cite: 5]</span>
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
                                    <span>Order Individual Copies</span>
                                    <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Chapters & Frameworks Overview */}
                    <div className="space-y-8">
                        <div className="space-y-2 border-b border-[#E8EDF4] pb-4">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                INSIDE THE BOOK
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
                                Core Modules & Frameworks
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CHAPTER_HIGHLIGHTS.map((chapter, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] transition-all space-y-3 shadow-xs"
                                >
                                    <span className="text-[10px] uppercase font-bold text-[#CC9F58] tracking-widest">
                                        {chapter.module}
                                    </span>
                                    <h3 className="font-serif text-lg font-bold text-[#072954]">
                                        {chapter.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                        {chapter.summary}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Corporate Bulk Orders Notice */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold !text-white">
                            Equip Your Leadership Team with &quot;The Time Code&quot;
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Special institutional volume rates and customized author keynote sessions are available
                            for corporations, commercial banks, state agencies, and faith institutions ordering 50+ copies.
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