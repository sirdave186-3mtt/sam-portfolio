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
        "Official executive rate card and services menu for Dr. Immanuelson Sam. Keynote speaking, strategic management consulting, corporate training, and executive advisory.",
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
        title: "Keynote Speaking (Physical / In-Person)",
        rateRange: "₦500,000 – ₦3,000,000",
        unit: "per engagement",
        duration: "1–2 Hours (Customizable)",
        overview:
            "Ignite corporate and institutional audiences with transformative paradigms on servant leadership, change, and risk management. Designed for summits, conferences, and board retreats.",
        icon: Mic2,
        popular: true,
    },
    {
        number: "02",
        category: "Speaking",
        title: "Keynote Speaking (Virtual Webinar)",
        rateRange: "₦250,000 – ₦1,000,000",
        unit: "per engagement",
        duration: "1–2 Hours (Customizable)",
        overview:
            "High-energy, interactive online keynotes unlocking organizational alignment and peak performance for global, remote, and distributed teams.",
        icon: Video,
    },
    {
        number: "03",
        category: "Advisory",
        title: "Strategic Advisory & Management Consulting",
        rateRange: "₦500,000 – ₦10,000,000",
        unit: "hourly / session-based",
        duration: "Session / Retainer",
        overview:
            "Visionary executive guidance on organizational design, risk frameworks, institutional reforms, and sustainable value creation for leaders and ministers.",
        icon: Compass,
        popular: true,
    },
    {
        number: "04",
        category: "Training",
        title: "Leadership Development & Culture Transformation",
        rateRange: "₦1,000,000 – ₦3,000,000",
        unit: "per workshop",
        duration: "Half-Day / Multi-Day",
        overview:
            "Equip executive and managerial teams with servant leadership, emotional intelligence, and cultural shifts required for sustainable excellence and inclusion.",
        icon: GraduationCap,
    },
    {
        number: "05",
        category: "Training",
        title: "Human Capital Solutions & Team Optimization",
        rateRange: "₦400,000 – ₦1,000,000",
        unit: "per session",
        duration: "Intensive Session",
        overview:
            "Strategic talent attraction, retention architecture, and team optimization to dramatically eliminate productivity leaks and elevate engagement.",
        icon: Users2,
    },
    {
        number: "06",
        category: "Advisory",
        title: "Financial Services & Performance Advisory",
        rateRange: "₦300,000 – ₦2,000,000",
        unit: "hourly / session-based",
        duration: "Session / Advisory",
        overview:
            "Leveraging 15+ years of high-stakes commercial banking expertise to guide capital planning, internal controls, and liquidity stability in volatile economies.",
        icon: TrendingUp,
    },
    {
        number: "07",
        category: "Training",
        title: "Digital Transformation & Marketing Strategies",
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
        title: "Debt Recovery & Credit Management Advisory",
        rateRange: "₦400,000 – ₦1,500,000",
        unit: "project-based",
        duration: "Project Scope",
        overview:
            "Ethical debt recovery architecture, structured credit underwriting diagnostics, and rigorous risk mitigation for sustainable balance-sheet health.",
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
            "Addressing the core structural bottlenecks of growing enterprises by implementing institutional workflows, governance models, and scalability engines.",
        icon: Store,
    },
    {
        number: "10",
        category: "Consultation",
        title: "1-on-1 Executive Leadership Consultation",
        rateRange: "₦100,000 – ₦250,000",
        unit: "per 1-hour session",
        duration: "1 Hour (Packages Available)",
        overview:
            "Confidential, high-clarity strategic counseling for C-suite leaders, founders, and public figures seeking personal breakthroughs and accountable execution.",
        icon: UserCheck,
        popular: true,
    },
];

export default function RatesPage() {
    return (
        <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Header Banner */}
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                            <span className="w-6 h-[1px] bg-brand-gold" />
                            Goldenmuv Premium Consulting Limited
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Services & Booking <br />
                            <span className="text-brand-gold italic">Rate Card & Advisory Menu</span>
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Transparent, value-driven investment brackets for engaging Dr. Immanuelson Sam across
                            keynote addresses, corporate masterclasses, executive retreats, and institutional advisory.
                        </p>
                    </div>

                    {/* Rate Policy & Notes Card */}
                    <div className="rounded-2xl bg-brand-surface border border-brand-gold-border/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div className="md:col-span-8 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>Standard Booking Protocol</span>
                                </div>
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                                    Engagement Guidelines & Customization
                                </h3>
                                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                                        <span>All rates are quoted in <strong>Nigerian Naira (₦)</strong> and are customizable based on audience scale, institutional scope, geographic location, and depth.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                                        <span>Fees exclude logistics, return flights, executive accommodation, and statutory VAT (unless bundled into corporate retainers).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                                        <span><strong>Multi-session packages, corporate retainers, and institutional board retainers</strong> are available upon tailored request.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
                                <Link
                                    href="/#booking"
                                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Request Custom Quote</span>
                                </Link>

                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-brand-card hover:bg-brand-surface text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-all duration-200"
                                >
                                    <Download className="w-4 h-4 text-brand-gold" />
                                    <span>Download PDF Rate Card</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Rates Grid: 10 Core Services */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-brand-border pb-4">
                            <h2 className="font-serif text-2xl font-bold text-white">Full Services Schedule</h2>
                            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                                10 Practice Offerings
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {SERVICES_DATA.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div
                                        key={service.number}
                                        className="p-6 sm:p-7 rounded-2xl bg-brand-card/90 border border-brand-border hover:border-brand-gold-border transition-all duration-300 flex flex-col justify-between space-y-5 relative group"
                                    >
                                        {service.popular && (
                                            <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold-border text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                                                <Sparkles className="w-3 h-3" />
                                                <span>Core Practice</span>
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            {/* Top Header: Number, Icon, Category */}
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold-border transition-colors shrink-0">
                                                    <IconComponent className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-mono font-bold text-slate-500">#{service.number}</span>
                                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-gold px-2 py-0.5 rounded bg-brand-surface border border-brand-border">
                                                            {service.category}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-brand-gold transition-colors">
                                                        {service.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Pricing Highlight */}
                                            <div className="p-3.5 rounded-xl bg-brand-surface/80 border border-brand-border/60 flex items-baseline justify-between gap-2">
                                                <span className="font-serif text-xl sm:text-2xl font-bold text-brand-gold tracking-tight">
                                                    {service.rateRange}
                                                </span>
                                                <span className="text-[11px] text-slate-400 capitalize">
                                                    {service.unit}
                                                </span>
                                            </div>

                                            {/* Duration Tag */}
                                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                                <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                                <span className="font-medium text-slate-200">Duration:</span>
                                                <span className="text-slate-400">{service.duration}</span>
                                            </div>

                                            {/* Service Overview */}
                                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                {service.overview}
                                            </p>
                                        </div>

                                        {/* Card Footer CTA */}
                                        <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                                            <span className="text-[11px] text-slate-500 font-mono">
                                                Item Ref: GMPC-{service.number}
                                            </span>
                                            <Link
                                                href="/#booking"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-white transition-colors"
                                            >
                                                <span>Book Engagement</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Retainer Callout */}
                    <div className="rounded-2xl bg-gradient-to-r from-brand-surface via-brand-card to-brand-surface border border-brand-border p-8 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                            Institutional Retainers & Multi-Session Summits
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                            For state governments, federal ministries, bank conglomerates, and pan-African NGO consortia
                            requiring ongoing advisory, executive board seats, or customized leadership transformation programs.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/#booking"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
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