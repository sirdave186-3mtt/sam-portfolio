import Image from "next/image";
import Link from "next/link";
import { Download, ArrowUpRight, Presentation, Users, Building2 } from "lucide-react";
import { SIGNATURE_TOPICS, CLIENT_LOGOS } from "@/lib/constants";

export default function SpeakingSection() {
    return (
        <section id="speaking" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border pb-10">
                    <div className="max-w-2xl space-y-3">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                            <span className="w-6 h-[1px] bg-brand-gold" />
                            Keynotes & Executive Masterclasses
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Igniting Audiences with <br />
                            <span className="text-brand-gold">Actionable Intelligence</span>
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Dr. Immanuelson Sam addresses governance summits, board retreats, and executive conferences across Africa and globally,
                            delivering high-voltage paradigms on servant leadership, change, and risk optimization[cite: 3, 6, 7].
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <a
                            href="/docs/dr-immanuelson-sam-speaker-kit.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-brand-gold-border bg-brand-card hover:bg-brand-bg text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                        >
                            <Download className="w-4 h-4" />
                            <span>Download Speaker Kit (PDF)[cite: 17]</span>
                        </a>
                        <Link
                            href="#booking"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                        >
                            <span>Book Speaking Session[cite: 17]</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Visual Stage & Speaking Reel Spotlight */}
                <div className="relative rounded-2xl overflow-hidden border border-brand-gold-border/40 shadow-2xl bg-brand-card aspect-[16/9] md:aspect-[21/9] max-h-[500px] group">
                    <Image
                        src="/images/speaking-stage.jpg"
                        alt="Dr. Immanuelson Sam on stage facilitating executive leadership workshop"
                        fill
                        className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="max-w-xl space-y-2">
                            <span className="px-2.5 py-1 rounded bg-brand-gold text-black text-[10px] font-bold uppercase tracking-widest">
                                Keynote Authority
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                                Transformative Stages & Executive Retreats
                            </h3>
                            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                                Facilitating high-level governance sessions for government councils, corporate boards, and industry retreats[cite: 3, 7, 13, 14].
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-brand-gold-light bg-brand-surface/90 px-4 py-2.5 rounded-lg border border-brand-gold-border/40 backdrop-blur-md">
                            <Users className="w-4 h-4 text-brand-gold" />
                            <span>Conferences • Board Retreats • Virtual Summits[cite: 6, 7]</span>
                        </div>
                    </div>
                </div>

                {/* Signature Topics Grid */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-serif text-2xl font-bold text-white">Signature Keynote Frameworks[cite: 6]</h3>
                        <p className="text-sm text-slate-400">
                            Each engagement is customized to address the unique macroeconomic and institutional realities of your organization[cite: 6].
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SIGNATURE_TOPICS.map((topic, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-brand-card/80 border border-brand-border hover:border-brand-gold-border transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between space-y-4 group"
                            >
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:border-brand-gold-border transition-colors">
                                        <Presentation className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                                        {topic.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                        {topic.focus}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-slate-400">
                                    <span className="text-brand-gold font-medium">1 - 2 Hours Keynote[cite: 7]</span>
                                    <Link href="#booking" className="hover:text-white transition-colors flex items-center gap-1">
                                        Request Topic <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted Partners & Institutions Grid */}
                <div className="pt-10 border-t border-brand-border/60 space-y-6">
                    <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-gold" />
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                            Trusted by Leading Institutions Across Nigeria & West Africa[cite: 16]
                        </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {CLIENT_LOGOS.map((client, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-lg bg-brand-bg/90 border border-brand-border text-xs text-slate-300 font-medium hover:border-brand-gold-border/60 hover:text-white transition-colors"
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