import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Mic2,
    Video,
    Compass,
    Calendar,
    ArrowRight,
    Download,
    CheckCircle2,
    Sparkles,
    Users,
    ShieldCheck,
    Building2,
    Clock,
    Globe
} from "lucide-react";

export const metadata: Metadata = {
    title: "Keynote Speaking & Masterclasses | Dr. Immanuelson Sam",
    description:
        "Engage Dr. Immanuelson Sam for physical keynotes, executive retreats, governance summits, and high-impact corporate masterclasses across Africa and worldwide.",
};

const KEYNOTE_TOPICS = [
    {
        number: "01",
        title: "Unlocking Leadership Potential in Uncertain Times",
        category: "Change & Resilience",
        description:
            "A transformative keynote addressing how visionary leaders maintain clarity, stabilize institutional culture, and capture market opportunities during macroeconomic upheaval.",
        audiences: "C-Suite Executives, State Cabinets, Industry Summits",
    },
    {
        number: "02",
        title: "The Servant Leader's Code: Ethics, Empathy, and Execution",
        category: "Institutional Culture",
        description:
            "Bridging the void between executive authority and ground-level execution. Equipping leaders with ethical stewardship models that build high-trust, resilient organizations.",
        audiences: "Corporate Boards, Ministries, Leadership Retreats",
    },
    {
        number: "03",
        title: "Navigating Volatility: Strategic Risk & Balance-Sheet Discipline",
        category: "Governance & Risk",
        description:
            "Synthesizing 15+ years of commercial banking and turnaround consulting into actionable risk governance, liquidity preservation, and operational resilience.",
        audiences: "Financial Institutions, Commercial Boards, MSME Summits",
    },
    {
        number: "04",
        title: "Time Code: Operating Systems for Peak Performance",
        category: "Executive Productivity",
        description:
            "Based on Dr. Sam's acclaimed book, this session delivers practical protocols to eliminate cognitive burnout, protect executive attention, and ensure consistent strategic output.",
        audiences: "Executive Committees, Tech Leaders, Annual Conferences",
    },
];

export default function SpeakingPage() {
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
                                    GLOBAL KEYNOTES & EXECUTIVE MASTERCLASSES
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Transformative Perspectives for <br />
                                <span className="italic text-[#CC9F58]">High-Stakes Audiences</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                Dr. Immanuelson Sam addresses governance councils, corporate board retreats, and pan-African summits.
                                His keynotes combine commercial rigour with infectious inspirational delivery.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Calendar className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Check Dr. Sam&apos;s Availability</span>
                                </Link>
                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Download className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Download Speaker Kit (PDF)</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Speaking Overview Snapshot (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <Mic2 className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Platform Delivery Profile
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">GMPC-SPK</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">10,000+</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Leaders & Delegates Inspired Across Africa</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Global</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Physical Summits & Studio Virtual Keynotes</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">1–2 Hrs</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">High-Voltage Signature Keynote Delivery</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">1–3 Days</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Intensive Strategic Executive Retreats</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Custom Curated Frameworks</p>
                                        <p className="text-[11px] text-[#4A5568]">Tailored to Institutional Themes & Objectives</p>
                                    </div>
                                    <Link
                                        href="/rates"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                    >
                                        <span>View Rates</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Featured Stage Visual Card */}
                    <div className="rounded-3xl bg-[#072954] text-white overflow-hidden border border-[#E8EDF4] grid grid-cols-1 lg:grid-cols-12 shadow-xl">
                        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#CC9F58] text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                    Signature Platform
                                </span>
                                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
                                    Moving Beyond Motivational Speech to Institutional Action
                                </h2>
                                <p className="text-[#E8EDF4] text-sm sm:text-base leading-relaxed">
                                    Every engagement is rigorously tailored to your organization&apos;s strategic objectives.
                                    Whether addressing 20 board directors at a private retreat or 2,000 delegates at an international
                                    summit, Dr. Sam delivers practical, measurable frameworks.
                                </p>
                            </div>

                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Check Dr. Sam&apos;s Availability</span>
                                </Link>
                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/40 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-all"
                                >
                                    <Download className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Download Speaker Kit</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-black">
                            <Image
                                src="/images/speaking-stage.jpg"
                                alt="Dr. Immanuelson Sam on Stage Delivering a Keynote"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 500px"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* 4 Signature Keynote Frameworks */}
                    <div className="space-y-8">
                        <div className="space-y-2 border-b border-[#E8EDF4] pb-4">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                CATALOGUE OF ENGAGEMENTS
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
                                Signature Keynote Topics
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {KEYNOTE_TOPICS.map((topic) => (
                                <div
                                    key={topic.number}
                                    className="p-8 rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-lg group"
                                >
                                    <div className="space-y-3.5">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs font-bold text-[#4A5568]">#{topic.number}</span>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-[#072954] px-2.5 py-1 rounded bg-[#FAF7F2] border border-[#E8EDF4]">
                                                {topic.category}
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-xl font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors leading-snug">
                                            {topic.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                            {topic.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-[#E8EDF4] space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-[#072954] font-medium">
                                            <Users className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                            <span>Target: {topic.audiences}</span>
                                        </div>

                                        <div className="flex items-center justify-between pt-1">
                                            <Link
                                                href="/rates"
                                                className="text-xs font-semibold text-[#4A5568] hover:text-[#072954] transition-colors"
                                            >
                                                View Rates (₦500k – ₦3M)
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors"
                                            >
                                                <span>Book Topic</span>
                                                <ArrowRight className="w-3.5 h-3.5 text-[#CC9F58]" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Formats Grid: In-Person, Virtual, Retreats */}
                    <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-8 sm:p-12 space-y-8">
                        <div className="text-center max-w-2xl mx-auto space-y-2">
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
                                Engagement Formats & Delivery Models
                            </h3>
                            <p className="text-xs sm:text-sm text-[#4A5568]">
                                Custom delivery channels tailored to your summit, retreat, or digital audience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-white border border-[#E8EDF4] space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58]">
                                    <Mic2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-serif text-lg font-bold text-[#072954]">In-Person Summits</h4>
                                <p className="text-xs text-[#4A5568] leading-relaxed">
                                    High-energy keynote addresses delivered at national conventions, industry conferences, and global assemblies.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white border border-[#E8EDF4] space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58]">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-serif text-lg font-bold text-[#072954]">Executive Retreats</h4>
                                <p className="text-xs text-[#4A5568] leading-relaxed">
                                    Immersive 1 to 3-day strategic alignment sessions for executive management teams, corporate boards, and state cabinets.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white border border-[#E8EDF4] space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58]">
                                    <Video className="w-5 h-5" />
                                </div>
                                <h4 className="font-serif text-lg font-bold text-[#072954]">Virtual Keynotes</h4>
                                <p className="text-xs text-[#4A5568] leading-relaxed">
                                    Studio-quality interactive webinars and masterclasses broadcast seamlessly to distributed teams worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Retainer CTA */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                            Secure Dr. Immanuelson Sam for Your Event
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Dates are booked on a first-confirmed basis. Submit your event date, format, and audience details
                            to receive a prompt confirmation from the executive office.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                            >
                                <span>Initiate Speaking Request</span>
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