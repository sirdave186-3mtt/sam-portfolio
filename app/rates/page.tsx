import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Mic2,
    Video,
    Compass,
    GraduationCap,
    Users2,
    TrendingUp,
    Laptop,
    ShieldAlert,
    Store,
    UserCheck,
    Calendar,
    ArrowRight,
    Download,
    ShieldCheck,
    Clock,
    CheckCircle2,
    Sparkles
} from "lucide-react";

export const metadata: Metadata = {
    title: "Services & Booking Rate Card | Dr. Immanuelson Sam",
    description:
        "Official executive rate card and services schedule for Dr. Immanuelson Sam. Keynote speaking, strategic management consulting, corporate training, and executive advisory.",
};

interface ServiceItem {
    number: string;
    category: "Speaking" | "Advisory" | "Training" | "Consultation";
    title: string;
    rateRange: string;
    unit: string;
    duration: string;
    overview: string;
    icon: typeof Mic2;
    popular?: boolean;
}

const SERVICES_DATA: ServiceItem[] = [
    {
        number: "01",
        category: "Speaking",
        title: "Keynote Speaking (Physical)",
        rateRange: "₦500,000 – ₦3,000,000",
        unit: "per engagement",
        duration: "1–2 Hours (Customizable)",
        overview:
            "Ignite corporate and institutional audiences with transformative paradigms on servant leadership, change, and risk management.",
        icon: Mic2,
        popular: true,
    },
    {
        number: "02",
        category: "Speaking",
        title: "Keynote Speaking (Virtual)",
        rateRange: "₦250,000 – ₦1,000,000",
        unit: "per engagement",
        duration: "1–2 Hours (Customizable)",
        overview:
            "High-energy, interactive online keynotes unlocking organizational alignment and peak performance for global, remote teams.",
        icon: Video,
    },
    {
        number: "03",
        category: "Advisory",
        title: "Strategic Advisory & Consulting",
        rateRange: "₦500,000 – ₦10,000,000",
        unit: "session / retainer",
        duration: "Session / Retainer",
        overview:
            "Visionary executive guidance on organizational design, risk frameworks, institutional reforms, and sustainable value creation.",
        icon: Compass,
        popular: true,
    },
    {
        number: "04",
        category: "Training",
        title: "Leadership & Culture Transformation",
        rateRange: "₦1,000,000 – ₦3,000,000",
        unit: "per workshop",
        duration: "Half-Day / Multi-Day",
        overview:
            "Equip executive and managerial teams with servant leadership, emotional intelligence, and cultural shifts for sustainable excellence.",
        icon: GraduationCap,
    },
    {
        number: "05",
        category: "Training",
        title: "Human Capital & Team Optimization",
        rateRange: "₦400,000 – ₦1,000,000",
        unit: "per session",
        duration: "Intensive Session",
        overview:
            "Strategic talent attraction, retention architecture, and team optimization to eliminate productivity leaks and elevate engagement.",
        icon: Users2,
    },
    {
        number: "06",
        category: "Advisory",
        title: "Financial & Performance Advisory",
        rateRange: "₦300,000 – ₦2,000,000",
        unit: "session / advisory",
        duration: "Session / Advisory",
        overview:
            "Leveraging 15+ years of banking expertise to guide capital planning, internal controls, and liquidity stability in volatile economies.",
        icon: TrendingUp,
    },
    {
        number: "07",
        category: "Training",
        title: "Digital Transformation Strategies",
        rateRange: "₦300,000 – ₦2,000,000",
        unit: "per workshop",
        duration: "Custom Workshop",
        overview:
            "Accelerate institutional innovation, digital tool adoption, and agile market positioning to drive sustainable top-line revenue growth.",
        icon: Laptop,
    },
    {
        number: "08",
        category: "Advisory",
        title: "Debt Recovery & Credit Advisory",
        rateRange: "₦400,000 – ₦1,500,000",
        unit: "project-based",
        duration: "Project Scope",
        overview:
            "Ethical debt recovery architecture, structured credit underwriting diagnostics, and rigorous risk mitigation for balance-sheet health.",
        icon: ShieldAlert,
    },
    {
        number: "09",
        category: "Advisory",
        title: "MSME Mentoring & Business Structuring",
        rateRange: "₦500,000 – ₦2,500,000",
        unit: "project-based",
        duration: "Project Milestone",
        overview:
            "Addressing core structural bottlenecks of growing enterprises by implementing institutional workflows, governance, and scalability.",
        icon: Store,
    },
    {
        number: "10",
        category: "Consultation",
        title: "1-on-1 Executive Consultation",
        rateRange: "₦100,000 – ₦250,000",
        unit: "per 1-hour session",
        duration: "1 Hour (Packages Available)",
        overview:
            "Confidential, high-clarity strategic counseling for C-suite leaders, founders, and public figures seeking personal breakthroughs.",
        icon: UserCheck,
        popular: true,
    },
];

export default function RatesPage() {
    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-14">

                    {/* Executive Split Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8EDF4] pb-12">

                        {/* Left Column: Heading & Executive Mission (7 cols) */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    GOLDENMUV PREMIUM CONSULTING LIMITED
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Services & Booking <br />
                                <span className="italic text-[#CC9F58]">Rate Card & Advisory Schedule</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                Transparent, value-driven investment brackets for engaging Dr. Immanuelson Sam across
                                keynote addresses, corporate masterclasses, executive retreats, and institutional advisory.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Calendar className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Request Custom Quote</span>
                                </Link>
                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Download className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Download PDF Rate Card</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Rates & Investment Snapshot (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Engagement Terms & Tiers
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">GMPC-RATES</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">₦500k+</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Keynote Speaking & Masterclass Base Brackets</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">10</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Practice Areas & Tailored Service Modules</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Retainer</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Multi-Session Corporate & Board Retainers</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">24–48h</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Prompt Executive Proposal & Availability Review</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Currency Standard</p>
                                        <p className="text-[11px] text-[#4A5568]">Quoted in NGN (₦) • FX Invoicing on Request</p>
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

                    {/* Rate Protocol Policy Banner */}
                    <div className="rounded-2xl bg-[#FAF7F2] border border-[#E8EDF4] p-5 sm:p-7 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-8 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#072954]">
                                    <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Standard Booking Protocol</span>
                                </div>
                                <p className="text-xs text-[#4A5568] leading-relaxed">
                                    All rates are quoted in <strong>Nigerian Naira (₦)</strong> and tailored based on audience scale, institutional scope, and geographic travel. Fees exclude logistics and statutory VAT unless bundled into bespoke corporate retainers.
                                </p>
                            </div>

                            <div className="lg:col-span-4 flex flex-wrap gap-2.5 justify-start lg:justify-end">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>Custom Quote</span>
                                </Link>
                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Download className="w-3.5 h-3.5 text-[#CC9F58]" />
                                    <span>Rate Card (PDF)</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Compact 3-Column Rates Grid */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">
                                Schedule of Services & Investment Brackets
                            </h2>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#CC9F58]">
                                10 Practice Offerings
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {SERVICES_DATA.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div
                                        key={service.number}
                                        className="p-5 rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md group relative"
                                    >
                                        {/* Header Row: Badge & Ref */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-mono font-bold text-[#4A5568]">#{service.number}</span>
                                                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#072954] px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E8EDF4]">
                                                        {service.category}
                                                    </span>
                                                </div>
                                                {service.popular && (
                                                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#072954] px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#CC9F58]/50">
                                                        <Sparkles className="w-2.5 h-2.5 text-[#CC9F58]" />
                                                        <span>Core</span>
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title & Icon */}
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E8EDF4] flex items-center justify-center text-[#CC9F58] group-hover:bg-[#CC9F58] group-hover:text-[#072954] transition-colors shrink-0 mt-0.5">
                                                    <IconComponent className="w-4 h-4" />
                                                </div>
                                                <h3 className="font-serif text-base font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors leading-snug">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Streamlined Price Display */}
                                            <div className="border-y border-[#E8EDF4] py-2.5 flex items-baseline justify-between">
                                                <span className="font-serif text-base sm:text-lg font-bold text-[#072954] tracking-tight">
                                                    {service.rateRange}
                                                </span>
                                                <span className="text-[10px] text-[#4A5568] font-medium capitalize">
                                                    {service.unit}
                                                </span>
                                            </div>

                                            {/* Duration */}
                                            <div className="flex items-center gap-1.5 text-[11px] text-[#4A5568]">
                                                <Clock className="w-3 h-3 text-[#CC9F58] shrink-0" />
                                                <span className="font-semibold text-[#072954]">Duration:</span>
                                                <span className="truncate">{service.duration}</span>
                                            </div>

                                            {/* Overview */}
                                            <p className="text-xs text-[#4A5568] leading-relaxed line-clamp-3">
                                                {service.overview}
                                            </p>
                                        </div>

                                        {/* Footer Action */}
                                        <div className="pt-3 border-t border-[#E8EDF4] flex items-center justify-between text-xs">
                                            <span className="text-[10px] text-[#4A5568] font-mono">
                                                GMPC-{service.number}
                                            </span>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors"
                                            >
                                                <span>Book Engagement</span>
                                                <ArrowRight className="w-3 h-3 text-[#CC9F58] group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Retainer Callout */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold !text-white">
                            Institutional Retainers & Multi-Session Summits
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                            For state governments, federal ministries, banking conglomerates, and pan-African NGO consortia
                            requiring ongoing advisory, executive board seats, or customized leadership transformation programs.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Contact Executive Office for Retainer Quotes</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}