"use client";

import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
    const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section className="w-full py-10 bg-[#E8EDF4]/70 border-b border-[#CDD4DD]/60 overflow-hidden">
            <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 45s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
                <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#CC9F58]" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#072954]/75">
                        Trusted by Leading Corporate, State & Public Institutions Across Africa
                    </p>
                </div>
            </div>

            {/* Infinite Scrolling Track with Fainted Cards */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="marquee-track flex items-center gap-6 sm:gap-7">
                    {marqueeItems.map((client, idx) => (
                        <div
                            key={`${client.name}-${idx}`}
                            className="flex items-center justify-center px-5 py-3 rounded-xl bg-white/70 border border-[#CDD4DD]/50 shadow-none hover:bg-white hover:border-[#CC9F58]/60 hover:shadow-sm transition-all duration-300 group shrink-0 min-w-[170px] sm:min-w-[210px] h-16 sm:h-20"
                        >
                            <div className="relative w-32 sm:w-40 h-10 sm:h-12 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    fill
                                    sizes="(max-width: 640px) 140px, 180px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}