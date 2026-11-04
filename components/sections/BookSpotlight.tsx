import Link from "next/link";
import { BookOpen, Award, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function BookSpotlight() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E8EDF4]">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl space-y-2">
                        <div className="inline-flex items-center gap-2">
                            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                PUBLISHED WORKS & EXECUTIVE BLUEPRINTS
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                            Literary Thought Leadership
                        </h2>
                        <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed">
                            Dr. Immanuelson Sam translates high-level corporate governance, personal discipline,
                            and career strategy into actionable blueprints for high-performing individuals.
                        </p>
                    </div>

                    <Link
                        href="/books"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#072954] hover:text-[#CC9F58] transition-colors shrink-0"
                    >
                        <span>Explore All Books & Modules</span>
                        <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                    </Link>
                </div>

                {/* 2-Book Dual Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    {/* BOOK 1: The Time Code */}
                    <div className="rounded-3xl bg-white border border-[#E8EDF4] p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-xs hover:border-[#CC9F58] transition-all duration-300 group">

                        <div className="space-y-6">
                            {/* Portrait Video Mockup */}
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-2 border-[#CC9F58]/30 bg-[#072954]">
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

                            {/* Text Info */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#CC9F58]/40 text-[#072954] text-[10px] font-bold uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3 text-[#CC9F58]" />
                                        <span>Executive Flagship</span>
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-[#4A5568]">VOL. 01</span>
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors">
                                    The Time Code
                                </h3>

                                <p className="text-xs font-semibold text-[#CC9F58] flex items-center gap-1.5">
                                    <Award className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Foreword by Dr. Linus Okorie MFR</span>
                                </p>

                                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                    The untold secrets of how ordinary people master time to build extraordinary lives.
                                    A battle-tested personal operating system designed to eliminate procrastination,
                                    burnout, and cognitive distraction under macroeconomic volatility.
                                </p>

                                <div className="space-y-2 pt-1 text-xs text-[#072954] font-medium">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                        <span>Stop wasting time; live and lead with intentional clarity</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                        <span>Protocols to overcome distraction and executive fatigue</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOOK 1: The Time Code CTA Row */}
                        <div className="pt-4 border-t border-[#E8EDF4] flex flex-wrap items-center gap-2.5">
                            <a
                                href="#" /* Replace with The Time Code Amazon URL once available */
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                            >
                                <span>Get on Amazon</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#CC9F58]" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                            >
                                Bulk Order
                            </Link>
                            <Link
                                href="/books"
                                className="px-3.5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] font-semibold text-xs uppercase tracking-wider transition-all"
                            >
                                Details
                            </Link>
                        </div>
                    </div>

                    {/* BOOK 2: The School of Talents */}
                    <div className="rounded-3xl bg-white border border-[#E8EDF4] p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-xs hover:border-[#CC9F58] transition-all duration-300 group">

                        <div className="space-y-6">
                            {/* Portrait Video Mockup */}
                            <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-2 border-[#CC9F58]/30 bg-[#072954]">
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

                            {/* Text Info */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#CC9F58]/40 text-[#072954] text-[10px] font-bold uppercase tracking-wider">
                                        <Sparkles className="w-3 h-3 text-[#CC9F58]" />
                                        <span>Career & Human Capital</span>
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-[#4A5568]">VOL. 02</span>
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors">
                                    The School of Talents
                                </h3>

                                <p className="text-xs font-semibold text-[#CC9F58] flex items-center gap-1.5">
                                    <Award className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                    <span>Strategic Guide to Career Mastery & Placement</span>
                                </p>

                                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                    Ask most people their choice of career and they name the same few employers: Shell,
                                    Exxon Mobil, GT Bank, NNPC, and elite advisory firms. Yet very few are ever hired.
                                    Nigeria&apos;s graduates are talented—they are just not prepared. This book shows you how
                                    to join the ones who get hired.
                                </p>

                                <div className="space-y-2 pt-1 text-xs text-[#072954] font-medium">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                        <span>Bridge the void between academic degrees and institutional competence</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                        <span>Tactical interview, aptitude, and high-value workplace frameworks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOOK 2: The School of Talents CTA Row */}
                        <div className="pt-4 border-t border-[#E8EDF4] flex flex-wrap items-center gap-2.5">
                            <a
                                href="https://share.google/F2o2casrPdKeEsVbZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                            >
                                <span>Get on Amazon</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#CC9F58]" />
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                            >
                                Bulk Order
                            </Link>
                            <Link
                                href="/books"
                                className="px-3.5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] font-semibold text-xs uppercase tracking-wider transition-all"
                            >
                                Details
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}