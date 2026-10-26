import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, ShieldCheck } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-36 sm:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-bg">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                {/* Left Column: Positioning & CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-brand-gold-border bg-brand-surface/80 backdrop-blur-md w-fit">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-[11px] uppercase tracking-widest text-brand-gold-light font-medium">
                            African Voice • Global Speaker & Strategic Advisor
                        </span>
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                        Unlocking Leadership Potential in <span className="text-brand-gold italic">Uncertain Times.</span>
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                        Managing Partner at Goldenmuv Premium Consulting. Dr. Immanuelson Sam equips executives,
                        ministers, and visionary founders to navigate volatility, transform institutional culture,
                        and achieve sustainable triumph.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                        <Link
                            href="#booking"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-sm transition-all duration-200 shadow-gold-glow"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Dr. Sam to Speak</span>
                            <ArrowRight className="w-4 h-4 ml-0.5" />
                        </Link>

                        <Link
                            href="#literary"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-brand-border bg-brand-card/60 hover:bg-brand-card hover:border-brand-gold-border text-slate-200 hover:text-white text-sm transition-all duration-200"
                        >
                            <BookOpen className="w-4 h-4 text-brand-gold" />
                            <span>Explore "Time Code"</span>
                        </Link>
                    </div>

                    <div className="pt-6 border-t border-brand-border/60 grid grid-cols-3 gap-4">
                        <div>
                            <div className="text-brand-gold font-bold text-2xl font-serif">15+</div>
                            <p className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wider">Years Experience</p>
                        </div>
                        <div>
                            <div className="text-brand-gold font-bold text-2xl font-serif">50+</div>
                            <p className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wider">Organizations Advised</p>
                        </div>
                        <div>
                            <div className="text-brand-gold font-bold text-2xl font-serif">YALI</div>
                            <p className="text-[11px] text-slate-400 mt-0.5 uppercase tracking-wider">Fellow & Coach</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Hero Portrait */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                    <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold-border/40 shadow-2xl bg-brand-card">
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent z-10" />

                        <Image
                            src="/images/hero-portrait.png"
                            alt="Dr. Immanuelson Sam - Global Speaker and Management Consultant"
                            fill
                            priority
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 380px"
                            className="object-cover object-top filter grayscale-[5%] contrast-105 hover:scale-105 transition-transform duration-700"
                        />

                        <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl bg-brand-surface/90 border border-brand-gold-border/30 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-brand-gold/15 text-brand-gold">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-brand-gold uppercase tracking-widest font-semibold">Leadership Authority</p>
                                    <p className="text-xs font-medium text-white">Certified Management Consultant (CMC)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}