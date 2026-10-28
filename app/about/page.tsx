import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Award,
    ArrowRight,
    Compass,
    Briefcase,
    Users2,
    Landmark,
    CheckCircle2,
    Calendar,
    FileText,
    Building2,
    ShieldCheck,
    TrendingUp,
    Download
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
            title: "MSME Mentoring & Inclusion",
            description:
                "Building scalable structures for underrepresented entrepreneurs and driving macroeconomic inclusion across West African markets.",
        },
    ];

    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Executive Split Header (Approach 1) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8EDF4] pb-12">

                        {/* Left Column: Heading & Executive Mission (7 cols) */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    THE MANDATE & EXECUTIVE BIOGRAPHY
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Equipping Leaders to <br />
                                <span className="italic text-[#CC9F58]">Command Change & Uncertainty.</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                Managing Partner at Goldenmuv Premium Consulting Limited (GMPC). Guiding executives,
                                ministers, and visionary founders to turn macroeconomic volatility into enduring institutional opportunity.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Calendar className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Initiate Consultation</span>
                                </Link>
                                <a
                                    href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Download className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Executive Bio (PDF)</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Executive Snapshot Panel (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Executive Pedigree at a Glance
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">GMPC-REF</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">15+ Yrs</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">High-Stakes Banking & Corporate Advisory</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">50+</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Public Institutions & Corporate Boards Advised</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">CMC®</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Certified Management Consultant & Fellow (FIMC)</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">YALI</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Regional Leadership Fellow & Executive Coach</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Managing Partner</p>
                                        <p className="text-[11px] text-[#4A5568]">Goldenmuv Premium Consulting Ltd (GMPC)</p>
                                    </div>
                                    <Link
                                        href="/rates"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                    >
                                        <span>Rates</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Core Biography Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Portrait & Full Credentials Card */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#CC9F58] shadow-xl bg-[#FAF7F2]">
                                <Image
                                    src="/images/hero-portrait.png"
                                    alt="Dr. Immanuelson Sam"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 450px"
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Accreditations & Credentials */}
                            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-4 shadow-xs">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#072954]">
                                    <Award className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Accreditations & Professional Fellowships</span>
                                </div>
                                <div className="space-y-2.5">
                                    {ACCREDITATIONS.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A5568]">
                                            <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0 mt-0.5" />
                                            <span className="font-medium text-[#072954]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: In-Depth Narrative */}
                        <div className="lg:col-span-7 space-y-8 text-[#4A5568] text-sm sm:text-base leading-relaxed">
                            <div className="space-y-4">
                                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
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
                            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border-l-4 border-l-[#CC9F58] border-y border-r border-[#E8EDF4] space-y-3">
                                <h3 className="font-serif text-lg font-bold text-[#072954]">
                                    Strategic Scope & Governance Footprint
                                </h3>
                                <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A5568]">
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CC9F58] mt-2 shrink-0" />
                                        <span>Advising over 50 corporate and public institutions on governance frameworks, risk containment, and executive succession.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CC9F58] mt-2 shrink-0" />
                                        <span>Active Non-Executive Director on corporate boards across financial services, real estate, and agricultural logistics.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CC9F58] mt-2 shrink-0" />
                                        <span>Certified Management Consultant (CMC) and leadership coach for the prestigious Young African Leaders Initiative (YALI).</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">
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
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Book Consultation with Dr. Sam</span>
                                </Link>
                                <Link
                                    href="/rates"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs"
                                >
                                    <FileText className="w-4 h-4 text-[#CC9F58]" />
                                    <span>View Services Rate Card</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 4 Pillars of Advisory Practice */}
                    <div className="space-y-8 pt-8 border-t border-[#E8EDF4]">
                        <div className="max-w-2xl space-y-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                CORE COMPETENCIES
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
                                Pillars of Advisory Practice
                            </h2>
                            <p className="text-xs sm:text-sm text-[#4A5568]">
                                Disciplines through which Dr. Sam assists institutions in navigating volatility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {leadershipPillars.map((pillar, idx) => {
                                const IconComponent = pillar.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-7 rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] transition-all duration-300 shadow-xs hover:shadow-md space-y-3"
                                    >
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E8EDF4] flex items-center justify-center text-[#CC9F58] shrink-0">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-serif text-lg font-bold text-[#072954]">{pillar.title}</h3>
                                        </div>
                                        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Retainer Callout */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                            Institutional Advisory & Board Engagements
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                            Dr. Sam partners with forward-thinking boards, ministries, and executive committees on
                            long-term transformation retainers and governance restructuring.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
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