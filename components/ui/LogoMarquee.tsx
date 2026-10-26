"use client";

import { CLIENT_LOGOS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
    // Duplicate array to achieve a seamless, continuous infinite loop
    const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <div className="w-full py-10 bg-brand-surface border-y border-brand-border overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-gold" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Trusted by Leading Public & Private Institutions Across Africa
                    </p>
                </div>
            </div>

            {/* Infinite Scrolling Track */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
                    {marqueeItems.map((client, idx) => (
                        <div
                            key={`${client}-${idx}`}
                            className="flex items-center px-6 py-3 rounded-xl bg-brand-card/90 border border-brand-border text-xs sm:text-sm text-slate-300 font-medium whitespace-nowrap hover:border-brand-gold/50 hover:text-white transition-colors cursor-default"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}