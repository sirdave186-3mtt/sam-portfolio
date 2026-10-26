import { Briefcase, Compass, Users2, Landmark, CheckCircle2 } from "lucide-react";

export default function MandateSection() {
    const pillars = [
        {
            icon: Compass,
            title: "Servant Leadership & Governance",
            description:
                "Instilling ethical stewardship, accountability, and emotional intelligence to build resilient, high-performance executive teams in emerging economies[cite: 3, 6].",
        },
        {
            icon: Briefcase,
            title: "Strategic Reform & Transformation",
            description:
                "Navigating complex institutional changes by integrating risk management frameworks with performance optimization and sustainable value creation[cite: 3, 6].",
        },
        {
            icon: Users2,
            title: "Human Capital & Culture Alignment",
            description:
                "Designing thriving organizational cultures that attract, optimize, and retain elite talent across the public and corporate sectors[cite: 3, 8].",
        },
        {
            icon: Landmark,
            title: "MSME Mentorship & Inclusion",
            description:
                "Building scalable structures for underrepresented entrepreneurs and driving economic inclusion across West African markets[cite: 3, 8, 16].",
        },
    ];

    return (
        <section id="mandate" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-surface border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Section Header */}
                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        The Mandate & Philosophy
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Turning Ambition Into Action, <br />
                        <span className="text-brand-gold">Volatility Into Opportunity.</span>
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                        With over 15 years of battle-tested experience across commercial banking, public sector reform, and
                        human capital transformation, Dr. Immanuelson Sam bridges timeless inner principles with rigorous
                        institutional strategy[cite: 2].
                    </p>
                </div>

                {/* Narrative & Executive Summary Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Executive Bio Card */}
                    <div className="lg:col-span-7 bg-brand-card rounded-2xl p-8 border border-brand-border space-y-6">
                        <h3 className="font-serif text-2xl font-bold text-white">
                            Leadership Grounded in Real-World Impact
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            As Managing Partner at Goldenmuv Premium Consulting Limited (GMPC), Dr. Sam leads multidisciplinary teams
                            advising C-suite executives, state governors, and federal institutions across Nigeria and West Africa[cite: 2, 3, 16].
                            His career was shaped in high-stakes banking environments, where he mastered operational performance,
                            credit architecture, and ethical decision-making under macroeconomic pressure[cite: 2, 3, 8].
                        </p>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            Beyond boardrooms and cabinet retreats, he champions the next generation of African leaders through
                            the Young African Leaders Initiative (YALI) and community-driven mentorship initiatives[cite: 3, 15].
                        </p>

                        {/* Key Distinctions Bullet List */}
                        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-brand-border/60">
                            {[
                                "Supported 50+ institutional reforms[cite: 3, 8]",
                                "Non-Executive Director on multiple boards[cite: 3]",
                                "Certified Executive & Leadership Coach[cite: 3, 15]",
                                "World Bank-Supported Digital Participant[cite: 15]",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy Pillars */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                        {pillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-5 rounded-xl bg-brand-bg/80 border border-brand-border hover:border-brand-gold-border/60 transition-colors duration-200 space-y-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-brand-surface text-brand-gold border border-brand-border">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-semibold text-white text-base">{pillar.title}</h4>
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-11">
                                        {pillar.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}