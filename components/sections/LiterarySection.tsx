import Link from "next/link";
import { BookOpen, Sparkles, Quote, ExternalLink, Clock, Target, Zap } from "lucide-react";

export default function LiterarySection() {
    const corePillars = [
        {
            icon: Clock,
            title: "Mastery of Executive Time & Energy",
            description:
                "Practical frameworks for executives and founders to decode daily operational demands, eliminate productivity leaks, and focus on high-yield strategic impact[cite: 2, 3].",
        },
        {
            icon: Target,
            title: "Purpose-Driven Execution Under Pressure",
            description:
                "Synthesizing 15+ years of high-stakes corporate banking and public sector leadership into actionable disciplines for consistent performance[cite: 2, 3].",
        },
        {
            icon: Zap,
            title: "Unlocking Peak Productivity in Volatile Markets",
            description:
                "Building resilient personal systems that guard mental clarity, emotional intelligence, and decisive action amid macroeconomic uncertainty[cite: 1, 3, 6].",
        },
    ];

    return (
        <section id="literary" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16">
                {/* Section Header */}
                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        Published Work & Productivity Philosophy
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        TIME CODE: <br />
                        <span className="text-brand-gold italic">Unlocking Peak Performance & Purpose</span>
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                        In an era of relentless distraction and institutional demands, Dr. Immanuelson Sam provides
                        a battle-tested blueprint for leaders to command their time, optimize execution, and deliver sustainable results[cite: 2, 3].
                    </p>
                </div>

                {/* Book Presentation Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Stylized Book Visual */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[340px] aspect-[1/1.5] rounded-xl p-1 bg-gradient-to-b from-brand-gold/40 via-brand-border to-brand-gold/10 shadow-2xl shadow-brand-gold/10 group">
                            <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-[#121620] via-[#0E1118] to-[#0A0C10] p-8 flex flex-col justify-between border border-brand-gold-border/30 relative overflow-hidden">
                                {/* Decorative spine accent */}
                                <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/80 via-brand-gold/30 to-transparent" />
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all duration-500" />

                                <div className="space-y-4 pl-3">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-semibold tracking-wider uppercase border border-brand-gold-border/40">
                                        <Sparkles className="w-3 h-3" />
                                        Published Authority
                                    </div>
                                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                                        TIME <br />
                                        <span className="text-brand-gold">CODE</span>
                                    </h3>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                                        Mastering Time, Leadership & Execution
                                    </p>
                                </div>

                                <div className="pl-3 space-y-4 border-t border-brand-border/60 pt-6">
                                    <p className="text-xs text-slate-300 italic">
                                        "When leaders master the code of their time, they unlock the capacity to transform entire organizations[cite: 2, 3]."
                                    </p>
                                    <div>
                                        <p className="text-sm font-serif font-bold text-brand-gold-light tracking-wide">
                                            DR. IMMANUELSON SAM
                                        </p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                                            Management Consultant & Leadership Coach[cite: 1]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Book Context & Corporate Ordering */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                                The Practical Science of High-Impact Productivity
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Drawing directly from over 15 years guiding institutional transformations, public sector reforms,
                                and corporate turnarounds[cite: 2, 3], <em>Time Code</em> is Dr. Sam's definitive guide for professionals,
                                executives, and teams striving to achieve maximum output without sacrificing purpose or well-being[cite: 1, 2, 3].
                            </p>
                        </div>

                        {/* Core Pillars */}
                        <div className="grid grid-cols-1 gap-3.5">
                            {corePillars.map((pillar, idx) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-gold-border/50 transition-colors duration-200 flex items-start gap-3.5"
                                    >
                                        <div className="p-2 rounded-lg bg-brand-card text-brand-gold shrink-0 border border-brand-border">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-sm">{pillar.title}</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed mt-1">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Endorsement Callout */}
                        <div className="p-5 rounded-xl bg-brand-card/70 border-l-2 border-l-brand-gold border-y border-r border-brand-border space-y-2">
                            <Quote className="w-5 h-5 text-brand-gold/60" />
                            <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                                "Time Code is not just about scheduling—it is an operating system for leadership efficiency,
                                accountability, and sustainable growth in challenging economies[cite: 1, 2]."
                            </p>
                        </div>

                        {/* Purchase & Inquiry CTAs */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href="#booking"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-sm transition-all duration-200 shadow-gold-glow"
                            >
                                <BookOpen className="w-4 h-4" />
                                <span>Order Copies for Your Team</span>
                            </Link>
                            <a
                                href="https://www.goldenmuv.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-brand-surface hover:bg-brand-card text-slate-300 hover:text-white text-sm transition-all duration-200"
                            >
                                <span>Inquire via Goldenmuv</span>[cite: 1]
                                <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}