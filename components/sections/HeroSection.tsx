import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, ShieldCheck } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-bg">
            {/* Background ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 -right-24 w-80 h-80 bg-brand-bronze/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Column: Positioning & CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
                    {/* Positioning Badge */}
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-gold-border bg-brand-surface/80 backdrop-blur-md w-fit">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-xs uppercase tracking-widest text-brand-gold-light font-medium">
                            African Voice • Global Speaker & Strategic Advisor
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Unlocking Leadership Potential in <span className="text-brand-gold italic">Uncertain Times.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                        Managing Partner at Goldenmuv Premium Consulting[cite: 2]. Dr. Immanuelson Sam equips executives,
                        ministers, and visionary founders to navigate volatility, transform institutional culture,
                        and achieve sustainable triumph[cite: 2, 3].
                    </p>

                    {/* Direct Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <Link
                            href="#booking"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold transition-all duration-200 shadow-gold-glow hover:translate-y-[-1px]"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Dr. Sam to Speak</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>

                        <Link
                            href="#literary"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-brand-border bg-brand-card/60 hover:bg-brand-card hover:border-brand-gold-border text-slate-200 hover:text-white transition-all duration-200 backdrop-blur-sm"
                        >
                            <BookOpen className="w-4 h-4 text-brand-gold" />
                            <span>Explore "Time Code"</span>
                        </Link>
                    </div>

                    {/* Metrics & Social Proof */}
                    <div className="pt-8 border-t border-brand-border/70 grid grid-cols-3 gap-6">
                        <div>
                            <div className="text-brand-gold font-bold text-2xl lg:text-3xl font-serif">15+</div>
                            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Years Strategic Impact[cite: 2]</p>
                        </div>
                        <div>
                            <div className="text-brand-gold font-bold text-2xl lg:text-3xl font-serif">50+</div>
                            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Organizations Advised[cite: 3, 8]</p>
                        </div>
                        <div>
                            <div className="text-brand-gold font-bold text-2xl lg:text-3xl font-serif">YALI</div>
                            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Fellow & Coach[cite: 3, 15]</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Portrait */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                    <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold-border/40 shadow-2xl bg-brand-card">
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10 opacity-70" />

                        <Image
                            src="/images/hero-portrait.png"
                            alt="Dr. Immanuelson Sam - Global Speaker and Management Consultant"
                            fill
                            priority
                            className="object-cover object-top filter grayscale-[10%] contrast-105 hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-xl bg-brand-surface/90 border border-brand-gold-border/30 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-brand-gold/15 text-brand-gold">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-brand-gold uppercase tracking-widest font-semibold">Leadership Authority</p>
                                    <p className="text-sm font-medium text-white">Certified Management Consultant (CMC)[cite: 15]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}