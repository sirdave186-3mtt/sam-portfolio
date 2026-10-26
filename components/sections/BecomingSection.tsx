import Link from "next/link";
import { ArrowUpRight, Flame, Users, Sparkles, Target, Compass } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function BecomingSection() {
    const pillars = [
        {
            icon: Target,
            title: "Mindset & Identity Engineering",
            description: "Dismantling limiting self-constructs to align individuals with their highest capacity for leadership and societal contribution[cite: 3].",
        },
        {
            icon: Users,
            title: "Vibrant Community Synergy",
            description: "Connecting African changemakers, corporate climbers, and creative visionaries across borders to collaborate and scale impact[cite: 3, 11].",
        },
        {
            icon: Compass,
            title: "Purpose-to-Execution Mentorship",
            description: "Translating inner convictions and spiritual depth into measurable milestones, ethical ventures, and generational legacy[cite: 3].",
        },
    ];

    return (
        <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border relative overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative">
                {/* Section Header */}
                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        The Leadership Ecosystem
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        The Becoming Community: <br />
                        <span className="text-brand-gold italic">Awakening Africa&apos;s Next Generation</span>[cite: 1, 3]
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                        Beyond corporate boardrooms and institutional advisory[cite: 3], Dr. Immanuelson Sam stewards
                        <strong> The Becoming Community</strong>—a transformational incubator dedicated to nurturing future-ready
                        leaders equipped with character, competence, and clarity[cite: 6, 11].
                    </p>
                </div>

                {/* Feature Hero Card */}
                <div className="rounded-3xl bg-gradient-to-br from-brand-surface via-brand-card to-brand-bg border border-brand-gold-border/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold-border text-brand-gold text-xs font-semibold uppercase tracking-wider">
                                <Flame className="w-3.5 h-3.5" />
                                <span>The Flagship Mentorship Movement</span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                Where Purpose Meets Discipline & Community
                            </h3>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                The Becoming is where seekers, young professionals, and emerging founders gather for immersive masterclasses,
                                accountability circles, and character-building mentorship led directly by Dr. Sam[cite: 3, 11]. It is more than a network—it
                                is an intentional pathway toward personal mastery and societal impact[cite: 3].
                            </p>

                            <div className="pt-2">
                                <a
                                    href={SITE_METADATA.ecosystemUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-sm transition-all duration-200 shadow-gold-glow hover:translate-y-[-1px]"
                                >
                                    <span>Enter The Becoming Community</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Metrics / Impact Highlights */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {pillars.map((pillar, idx) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-2xl bg-brand-bg/90 border border-brand-border hover:border-brand-gold-border/60 transition-colors space-y-2"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-brand-surface text-brand-gold border border-brand-border">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <h4 className="font-semibold text-white text-sm">{pillar.title}</h4>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed pl-11">
                                            {pillar.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}