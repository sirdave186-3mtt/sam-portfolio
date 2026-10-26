import { Briefcase, Compass, Users2, Landmark, CheckCircle2 } from "lucide-react";

export default function MandateSection() {
    const pillars = [
        {
            icon: Compass,
            title: "Servant Leadership & Governance",
            description:
                "Instilling ethical stewardship, accountability, and emotional intelligence to build resilient, high-performance executive teams in emerging economies.",
        },
        {
            icon: Briefcase,
            title: "Strategic Reform & Transformation",
            description:
                "Navigating complex institutional changes by integrating risk management frameworks with performance optimization and sustainable value creation.",
        },
        {
            icon: Users2,
            title: "Human Capital & Culture Alignment",
            description:
                "Designing thriving organizational cultures that attract, optimize, and retain elite talent across public and corporate sectors.",
        },
        {
            icon: Landmark,
            title: "MSME Mentorship & Inclusion",
            description:
                "Building scalable structures for underrepresented entrepreneurs and driving economic inclusion across West African markets.",
        },
    ];

    return (
        <section id="mandate" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brand-surface border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Section Header */}
                <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        The Mandate & Philosophy
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Turning Ambition Into Action, <br />
                        <span className="text-brand-gold">Volatility Into Opportunity.</span>
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        With over 15 years of battle-tested experience across commercial banking, public sector reform, and
                        human capital transformation, Dr. Immanuelson Sam bridges timeless inner principles with rigorous
                        institutional strategy.
                    </p>
                </div>

                {/* Executive Bio Card */}
                <div className="bg-brand-card rounded-2xl p-6 sm:p-8 border border-brand-border space-y-5">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        Leadership Grounded in Real-World Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        <p>
                            As Managing Partner at Goldenmuv Premium Consulting Limited (GMPC), Dr. Sam leads multidisciplinary teams
                            advising C-suite executives, state governors, and federal institutions across Nigeria and West Africa.
                            His career was shaped in high-stakes banking environments, where he mastered operational performance,
                            credit architecture, and ethical decision-making under macroeconomic pressure.
                        </p>
                        <p>
                            Beyond boardrooms and cabinet retreats, he champions the next generation of African leaders through
                            the Young African Leaders Initiative (YALI) and community-driven mentorship initiatives, fostering
                            inclusive ecosystems that uplift emerging entrepreneurs.
                        </p>
                    </div>

                    {/* Quick Distinctions Row */}
                    <div className="pt-4 border-t border-brand-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                            "Supported 50+ institutional reforms",
                            "Non-Executive Director on multiple boards",
                            "Certified Executive & Leadership Coach",
                            "World Bank-Supported Digital Participant",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2x2 Balanced Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={idx}
                                className="p-5 rounded-xl bg-brand-bg/80 border border-brand-border hover:border-brand-gold-border/60 transition-colors space-y-2"
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
        </section>
    );
}