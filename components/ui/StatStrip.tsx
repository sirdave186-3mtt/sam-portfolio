export default function StatStrip() {
    const stats = [
        { value: "15+", label: "Years of Strategic Impact" },
        { value: "50+", label: "Institutions & Boards Advised" },
        { value: "10,000+", label: "Leaders & Executives Trained" },
    ];

    return (
        <section className="bg-[#FAF7F2] border-b border-[#E8EDF4] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E8EDF4]">
                {stats.map((stat, idx) => (
                    <div key={idx} className="pt-4 md:pt-0">
                        <div className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                            {stat.value}
                        </div>
                        <p className="text-xs uppercase tracking-wider text-[#4A5568] mt-1 font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}