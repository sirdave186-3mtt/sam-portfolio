"use client";

import { CLIENT_LOGOS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function LogoMarquee() {
    const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section className="w-full py-8 bg-[#E8EDF4] border-b border-[#CDD4DD] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#CC9F58]" />
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                        Trusted by Leading Institutions Across Nigeria & West Africa
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="animate-marquee-smooth flex gap-4">
                    {marqueeItems.map((client, idx) => (
                        <div
                            key={`${client}-${idx}`}
                            className="flex items-center px-5 py-2.5 rounded-lg bg-white border border-[#CDD4DD] text-xs sm:text-sm text-[#072954] font-semibold whitespace-nowrap shadow-xs hover:border-[#CC9F58] transition-colors"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#CC9F58] mr-3 shrink-0" />
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}