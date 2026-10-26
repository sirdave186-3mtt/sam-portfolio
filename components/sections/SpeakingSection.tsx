import Image from "next/image";
import Link from "next/link";
import { Download, ArrowUpRight, Presentation, Users, Building2 } from "lucide-react";
import { SIGNATURE_TOPICS, CLIENT_LOGOS } from "@/lib/constants";

export default function SpeakingSection() {
    return (
        <section id="speaking" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brand-surface border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-8">
                    <div className="max-w-2xl space-y-3">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                            <span className="w-6 h-[1px] bg-brand-gold" />
                            Keynotes & Executive Masterclasses
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Igniting Audiences with <br />
                            <span className="text-brand-gold">Actionable Intelligence</span>
                        </h2>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                            Dr. Immanuelson Sam addresses governance summits, board retreats, and executive conferences across Africa and globally,
                            delivering high-voltage paradigms on servant leadership, change, and risk optimization.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <a
                            href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-brand-gold-border bg-brand-card hover:bg-brand-bg text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Speaker Kit</span>
                        </a>
                        <Link
                            href="#booking"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                        >
                            <span>Book Speaking Session</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                {/* Stage Photo Frame: object-[25%_25%] keeps his head, glasses, and posture in frame */}
                <div className="rounded-2xl overflow-hidden border border-brand-gold-border/40 shadow-2xl bg-brand-card">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] max-h-[480px] bg-black">
                        <Image
                            src="/images/speaking-stage.jpg"
                            alt="Dr. Immanuelson Sam facilitating executive leadership retreat"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                            className="object-cover object-[25%_25%] filter contrast-105"
                        />
                    </div>

                    {/* Clean metadata strip below image */}
                    <div className="p-4 sm:p-5 bg-brand-card border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <span className="px-2.5 py-1 rounded bg-brand-gold text-black text-[10px] font-bold uppercase tracking-wider shrink-0">
                                Keynote Authority
                            </span>
                            <p className="text-xs sm:text-sm font-medium text-white">
                                Transformative Stages & Executive Retreats
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-brand-gold-light">
                            <Users className="w-3.5 h-3.5 text-brand-gold" />
                            <span>Board Retreats • Industry Summits • Corporate Forums</span>
                        </div>
                    </div>
                </div>

                {/* Signature Topics Grid */}
                <div className="space-y-5">
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-white">Signature Keynote Frameworks</h3>
                        <p className="text-xs text-slate-400 mt-1">
                            Customized to address the unique macroeconomic and institutional realities of your organization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SIGNATURE_TOPICS.map((topic, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-2xl bg-brand-card/80 border border-brand-border hover:border-brand-gold-border transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between space-y-3 group"
                            >
                                <div className="space-y-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold-border transition-colors">
                                        <Presentation className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                                        {topic.title}
                                    </h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {topic.focus}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-slate-400">
                                    <span className="text-brand-gold font-medium">1 - 2 Hours Keynote</span>
                                    <Link href="#booking" className="hover:text-white transition-colors flex items-center gap-1">
                                        Request Topic <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted Partners Ticker */}
                <div className="pt-6 border-t border-brand-border/60 space-y-4">
                    <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-gold" />
                        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                            Trusted by Leading Institutions Across Nigeria & West Africa
                        </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                        {CLIENT_LOGOS.map((client, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 rounded-lg bg-brand-bg/90 border border-brand-border text-[11px] text-slate-300 font-medium hover:border-brand-gold-border/60 hover:text-white transition-colors"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}