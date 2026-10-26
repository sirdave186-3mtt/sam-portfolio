"use client";

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
    ShieldCheck,
    Clock,
    CheckCircle2,
    Sparkles,
    ArrowDown
} from "lucide-react";

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

export default function RateCardSection() {
    const scrollToBooking = () => {
        const bookingElem = document.getElementById("booking");
        if (bookingElem) {
            bookingElem.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="rates" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brand-surface border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        Transparent Investment & Rate Card
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Services & Booking Schedule
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        Review Dr. Immanuelson Sam's official fee brackets below before submitting your event or advisory booking inquiry.
                    </p>
                </div>

                {/* Booking Protocol Notice */}
                <div className="rounded-2xl bg-brand-card/70 border border-brand-border p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Booking Guidelines</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>Rates are quoted in <strong>NGN (₦)</strong> and tailored by audience size, scope, and location.</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>Fees exclude flights, logistics, accommodation, and statutory VAT unless bundled.</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>Multi-session packages and long-term corporate retainers are available upon request.</span>
                        </div>
                    </div>
                </div>

                {/* 10 Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {SERVICES_DATA.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.number}
                                className="p-5 sm:p-6 rounded-2xl bg-brand-bg/90 border border-brand-border hover:border-brand-gold-border transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
                            >
                                {service.popular && (
                                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold-border text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3" />
                                        <span>Core Practice</span>
                                    </div>
                                )}

                                <div className="space-y-3.5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold-border transition-colors shrink-0">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-mono font-bold text-slate-500">#{service.number}</span>
                                                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-gold px-2 py-0.5 rounded bg-brand-surface border border-brand-border">
                                                    {service.category}
                                                </span>
                                            </div>
                                            <h3 className="font-serif text-lg font-bold text-white mt-1 group-hover:text-brand-gold transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Pricing Highlight */}
                                    <div className="p-3 rounded-xl bg-brand-surface/80 border border-brand-border/60 flex items-baseline justify-between gap-2">
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

                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {service.overview}
                                    </p>
                                </div>

                                {/* Card CTA: Auto-scrolls into form */}
                                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                                    <span className="text-[10px] text-slate-500 font-mono">
                                        Ref: GMPC-{service.number}
                                    </span>
                                    <button
                                        onClick={scrollToBooking}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-white transition-colors cursor-pointer"
                                    >
                                        <span>Proceed to Book</span>
                                        <ArrowDown className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}