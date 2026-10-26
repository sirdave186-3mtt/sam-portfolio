import { ArrowUpRight, Flame, Target, Users, Compass } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function BecomingSection() {
    const pillars = [
        {
            icon: Target,
            title: "Mindset & Identity Engineering",
            description: "Dismantling limiting self-constructs to align individuals with their highest capacity for leadership and societal contribution.",
        },
        {
            icon: Users,
            title: "Vibrant Community Synergy",
            description: "Connecting African changemakers, corporate climbers, and creative visionaries across borders to collaborate and scale impact.",
        },
        {
            icon: Compass,
            title: "Purpose-to-Execution Mentorship",
            description: "Translating inner convictions and spiritual depth into measurable milestones, ethical ventures, and generational legacy.",
        },
    ];

    return (
        <section id="ecosystem" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12 relative">
                <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        The Leadership Ecosystem
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        The Becoming Community: <br />
                        <span className="text-brand-gold italic">Awakening Africa&apos;s Next Generation</span>
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        Beyond corporate boardrooms and institutional advisory, Dr. Immanuelson Sam stewards
                        <strong> The Becoming Community</strong>—a transformational incubator dedicated to nurturing future-ready
                        leaders equipped with character, competence, and clarity.
                    </p>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-brand-surface via-brand-card to-brand-bg border border-brand-gold-border/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold-border text-brand-gold text-[11px] font-semibold uppercase tracking-wider">
                                <Flame className="w-3.5 h-3.5" />
                                <span>The Flagship Mentorship Movement</span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                                Where Purpose Meets Discipline & Community
                            </h3>

                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                The Becoming is where seekers, young professionals, and emerging founders gather for immersive masterclasses,
                                accountability circles, and character-building mentorship led directly by Dr. Sam. It is more than a network—it
                                is an intentional pathway toward personal mastery and societal impact.
                            </p>

                            <div className="pt-1">
                                <a
                                    href={SITE_METADATA.ecosystemUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                                >
                                    <span>Enter The Becoming Community</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
                            {pillars.map((pillar, idx) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-xl bg-brand-bg/90 border border-brand-border hover:border-brand-gold-border/60 transition-colors space-y-1.5"
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-brand-surface text-brand-gold border border-brand-border">
                                                <Icon className="w-3.5 h-3.5" />
                                            </div>
                                            <h4 className="font-semibold text-white text-xs sm:text-sm">{pillar.title}</h4>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed pl-9">
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