import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    ShieldCheck,
    Building2,
    Award,
    ArrowRight,
    Compass,
    Briefcase,
    Users2,
    Landmark,
    CheckCircle2,
    Calendar,
    FileText
} from "lucide-react";
import { ACCREDITATIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "The Mandate & Executive Biography | Dr. Immanuelson Sam",
    description:
        "Explore the biography, career trajectory, and leadership philosophy of Dr. Immanuelson Sam—Managing Partner at Goldenmuv Premium Consulting, Certified Management Consultant, and YALI Fellow.",
};

export default function AboutPage() {
    const leadershipPillars = [
        {
            icon: Compass,
            title: "Servant Leadership & Governance",
            description:
                "Instilling ethical stewardship, accountability, and emotional intelligence to build resilient, high-performance executive teams in emerging economies.",
        },
        {
            icon: Briefcase,
            title: "Strategic Reform & Transformation",
            description:
                "Navigating complex institutional turnarounds by integrating risk management frameworks with operational optimization and sustainable value creation.",
        },
        {
            icon: Users2,
            title: "Human Capital & Culture Alignment",
            description:
                "Designing institutional workplaces that attract, optimize, and retain elite talent across both public corporations and private conglomerates.",
        },
        {
            icon: Landmark,
            title: "MSME Mentorship & Inclusion",
            description:
                "Building scalable structures for underrepresented entrepreneurs and driving macroeconomic inclusion across West African markets.",
        },
    ];

    return (
        <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Header Banner */}
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                            <span className="w-6 h-[1px] bg-brand-gold" />
                            The Mandate & Executive Biography
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Equipping Leaders to <br />
                            <span className="text-brand-gold italic">Command Change & Uncertainty.</span>
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Managing Partner at Goldenmuv Premium Consulting Limited (GMPC). Guiding executives,
                            ministers, and visionary founders to turn volatility into enduring opportunity.
                        </p>
                    </div>

                    {/* Core Biography Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Portrait & Credentials Card */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold-border/40 shadow-2xl bg-brand-card">
                                <Image
                                    src="/images/hero-portrait.png"
                                    alt="Dr. Immanuelson Sam"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 450px"
                                    className="object-cover object-top filter contrast-105"
                                />
                            </div>

                            {/* Accreditations & Credentials */}
                            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                                    <Award className="w-4 h-4" />
                                    <span>Accreditations & Professional Fellowships</span>
                                </div>
                                <div className="space-y-2.5">
                                    {ACCREDITATIONS.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: In-Depth Narrative */}
                        <div className="lg:col-span-7 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
                            <div className="space-y-4">
                                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                                    A Career Forged in Banking, Reform, and Executive Development
                                </h2>
                                <p>
                                    With more than 15 years of battle-tested leadership experience, Dr. Immanuelson Sam
                                    has established himself as one of West Africa&apos;s most respected strategic advisors.
                                    His foundational career took root in high-stakes commercial banking environments, where
                                    he operated at the intersection of credit architecture, operational risk mitigation,
                                    and institutional capital preservation.
                                </p>
                                <p>
                                    Observing firsthand how leadership voids and reactive management erode institutional value,
                                    Dr. Sam transitioned his focus toward broad-scale organizational transformation and human
                                    capital architecture. Today, as Managing Partner at Goldenmuv Premium Consulting Limited (GMPC),
                                    he directs multidisciplinary consulting teams advising government councils, commercial banks,
                                    and corporate boards across Nigeria and the wider African continent.
                                </p>
                            </div>

                            {/* Notable Distinctions Box */}
                            <div className="p-6 rounded-2xl bg-brand-card/80 border-l-4 border-l-brand-gold border-y border-r border-brand-border space-y-3">
                                <h3 className="font-serif text-lg font-bold text-white">
                                    Strategic Scope & Governance Footprint
                                </h3>
                                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                                        <span>Advising over 50 corporate and public institutions on governance frameworks, risk containment, and executive succession.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                                        <span>Active Non-Executive Director on corporate boards across financial services, real estate, and agricultural logistics.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                                        <span>Certified Management Consultant (CMC) and leadership coach for the prestigious Young African Leaders Initiative (YALI).</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                                    The Philosophy: Inner Alignment Precedes Institutional Triumph
                                </h3>
                                <p>
                                    Dr. Sam advocates that organizational breakdown is rarely a failure of intellectual models;
                                    it is fundamentally a failure of character, time mastery, and emotional clarity. In his published work,
                                    <em> Time Code</em>, he outlines the actionable disciplines leaders must cultivate to prevent cognitive
                                    exhaustion, eliminate productivity leaks, and remain anchored to their core mandate during turbulent economic cycles.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Book Consultation with Dr. Sam</span>
                                </Link>
                                <Link
                                    href="/rates"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-brand-surface hover:bg-brand-card text-slate-300 hover:text-white text-xs uppercase tracking-wider transition-all duration-200"
                                >
                                    <FileText className="w-4 h-4 text-brand-gold" />
                                    <span>View Services Rate Card</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 4 Pillars of Practice */}
                    <div className="space-y-8 pt-8 border-t border-brand-border">
                        <div className="max-w-2xl space-y-2">
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                                Pillars of Advisory Practice
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-400">
                                Core disciplines through which Dr. Sam assists institutions in navigating volatility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {leadershipPillars.map((pillar, idx) => {
                                const IconComponent = pillar.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border hover:border-brand-gold-border transition-colors space-y-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-serif text-lg font-bold text-white">{pillar.title}</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-13">
                                            {pillar.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Retainer Callout */}
                    <div className="rounded-3xl bg-gradient-to-r from-brand-surface via-brand-card to-brand-surface border border-brand-border p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                            Institutional Advisory & Board Engagements
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                            Dr. Sam partners with forward-thinking boards, ministries, and executive committees on
                            long-term transformation retainers and governance restructuring.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                            >
                                <span>Initiate Executive Discussion</span>
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