"use client";

import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
    // Duplicating the list ensures a continuous, unbroken scroll across all screen sizes
    const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section className="w-full py-12 bg-[#E8EDF4] border-b border-[#CDD4DD] overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#CC9F58]" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                        Trusted by Leading Corporate, State & Public Institutions Across Africa
                    </p>
                </div>
            </div>

            {/* Infinite Scrolling Track with Subtle Edge Masks */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="marquee-track flex items-center gap-6 sm:gap-8">
                    {marqueeItems.map((client, idx) => (
                        <div
                            key={`${client.name}-${idx}`}
                            className="flex items-center justify-center px-6 py-4 rounded-2xl bg-white border border-[#CDD4DD] shadow-xs hover:border-[#CC9F58] hover:shadow-lg transition-all duration-300 group shrink-0 min-w-[190px] sm:min-w-[230px] h-20 sm:h-24"
                        >
                            {/* Scaled-up Logo Frame with Full Color and Sharp Contrast */}
                            <div className="relative w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center">
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    fill
                                    sizes="(max-width: 640px) 150px, 200px"
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}