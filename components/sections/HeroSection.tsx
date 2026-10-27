import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative bg-[#072954] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Concentric Orbit Rings (from Logo Identity, Brand Guide Page 7) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#CC9F58]/15 pointer-events-none" />
            <div className="absolute right-24 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-[#CC9F58]/25 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Core Positioning Statement */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#CC9F58]">
                            GLOBAL SPEAKER • MANAGEMENT CONSULTANT
                        </span>
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                        Leadership that moves people. <br />
                        <span className="italic text-[#CC9F58]">Strategy that moves organisations.</span>
                    </h1>

                    <p className="text-[#E8EDF4] text-base sm:text-lg max-w-xl leading-relaxed">
                        Keynotes, workshops, and high-stakes consulting that turn ambition into measurable
                        results for executive teams and public institutions across Africa and globally.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        {/* Primary Action: Gold with Navy Text */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
                        >
                            <span>Book a Speaking Slot</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        {/* Secondary Action: Outline Button */}
                        <Link
                            href="/rates"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                        >
                            <Compass className="w-4 h-4 text-[#CC9F58]" />
                            <span>Explore Consulting</span>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Hero Portrait in Brand Gold Frame */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="relative w-[320px] sm:w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#CC9F58] shadow-2xl bg-[#041A38]">
                        <Image
                            src="/images/hero-portrait.png"
                            alt="Dr. Immanuelson Sam"
                            fill
                            priority
                            sizes="(max-width: 640px) 90vw, 380px"
                            className="object-cover object-top"
                        />
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#041A38]/70 via-transparent to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8EDF4] text-[#072954]">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-[#CC9F58]">Leadership Authority</p>
                            <p className="text-xs font-semibold">Certified Management Consultant (CMC) & YALI Fellow</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}