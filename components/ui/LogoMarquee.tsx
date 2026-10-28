"use client";

import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
    // Duplicating the 14-item list ensures an unbroken loop across all viewport widths
    const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section className="w-full py-10 bg-[#E8EDF4] border-b border-[#CDD4DD] overflow-hidden">
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
                    <Building2 className="w-4 h-4 text-[#CC9F58]" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                        Trusted by Leading Corporate, State & Public Institutions Across Africa
                    </p>
                </div>
            </div>

            {/* Infinite Scrolling Track with Gradient Edge Masks */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="marquee-track flex items-center gap-5 sm:gap-7">
                    {marqueeItems.map((client, idx) => (
                        <div
                            key={`${client.name}-${idx}`}
                            className="flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-[#CDD4DD] shadow-xs hover:border-[#CC9F58] hover:shadow-md transition-all duration-300 group shrink-0 min-w-[140px] sm:min-w-[170px] h-16 sm:h-20"
                        >
                            <div className="relative w-28 sm:w-36 h-9 sm:h-11 flex items-center justify-center">
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    fill
                                    sizes="(max-width: 640px) 120px, 160px"
                                    className="object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}