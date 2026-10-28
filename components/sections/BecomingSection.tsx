import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Users, Sparkles, Compass, HeartHandshake, ArrowRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function BecomingSection() {
    const pillars = [
        {
            icon: Sparkles,
            title: "Purpose & Identity Architecture",
            description: "Guiding emerging leaders to discover clarity of calling, inner alignment, and long-term vision.",
        },
        {
            icon: Compass,
            title: "Strategic Execution & Mastery",
            description: "Equipping changemakers with personal operating systems, temporal discipline, and focus.",
        },
        {
            icon: HeartHandshake,
            title: "Ethical Servant Stewardship",
            description: "Instilling deep character, empathy, and institutional integrity across diverse sectors.",
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8EDF4]">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Section Header */}
                <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                            CONTINENTAL MENTORSHIP ECOSYSTEM
                        </span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                        The Becoming Community
                    </h2>
                    <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                        A pan-African leadership incubator founded by Dr. Immanuelson Sam, dedicated to raising purpose-driven,
                        future-ready changemakers equipped with character and execution capabilities.
                    </p>
                </div>

                {/* Highlight Card */}
                <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="space-y-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#E8EDF4] text-[#072954] text-[10px] font-bold uppercase tracking-wider">
                                Generational Impact
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
                                Transforming Potential into Institutional Leadership
                            </h3>
                            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                                Through structured cohort programs, masterclasses, and hands-on civic projects, The Becoming Community
                                bridges the divide between raw talent and executive competence for young leaders across Africa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                            {pillars.map((pillar, idx) => {
                                const Icon = pillar.icon;
                                return (
                                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#E8EDF4] space-y-2 shadow-xs">
                                        <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58]">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-serif text-sm font-bold text-[#072954]">{pillar.title}</h4>
                                        <p className="text-xs text-[#4A5568] leading-relaxed">{pillar.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <a
                                href={SITE_METADATA.becomingCommunityWebsite || SITE_METADATA.ecosystemUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#072954] hover:bg-[#041A38] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                            >
                                <span>Visit The Becoming Platform</span>
                                <ArrowUpRight className="w-4 h-4 text-[#CC9F58]" />
                            </a>

                            <Link
                                href="/gallery"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                            >
                                <span>View Mentorship Photos</span>
                                <ArrowRight className="w-4 h-4 text-[#CC9F58]" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex justify-center">
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#E8EDF4] shadow-md bg-[#072954]">
                            <Image
                                src="/images/speaking-stage.jpg"
                                alt="Dr. Immanuelson Sam Mentoring at The Becoming Community"
                                fill
                                sizes="(max-width: 1024px) 100vw, 400px"
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#072954]/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8EDF4]">
                                <p className="text-[10px] uppercase font-bold text-[#CC9F58] tracking-widest">Cohort Sessions</p>
                                <p className="text-xs font-semibold text-[#072954]">Active Cohort & Community Forums</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}