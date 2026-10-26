"use client";

import { CLIENT_LOGOS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
    // Triplicate the list to ensure a smooth, continuous loop across all screen sizes
    const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section className="w-full py-8 bg-brand-surface border-y border-brand-border overflow-hidden relative">
            <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-brand-gold" />
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                        Trusted by Leading Public & Private Institutions Across Africa
                    </p>
                </div>
            </div>

            {/* Infinite Scrolling Track with Gradient Edge Masks */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="marquee-track flex gap-4">
                    {marqueeItems.map((client, idx) => (
                        <div
                            key={`${client}-${idx}`}
                            className="flex items-center px-5 py-2.5 rounded-xl bg-brand-card/90 border border-brand-border text-xs sm:text-sm text-slate-300 font-medium whitespace-nowrap hover:border-brand-gold/50 hover:text-white transition-colors cursor-default"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3 shrink-0" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}