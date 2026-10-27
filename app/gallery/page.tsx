"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, ArrowRight, X, Filter, Building2, Sparkles } from "lucide-react";

type Category = "all" | "masterclasses" | "retreats" | "summits" | "mentorship";

interface GalleryItem {
    id: string;
    title: string;
    clientOrEvent: string;
    category: "masterclasses" | "retreats" | "summits" | "mentorship";
    imageSrc: string;
    date: string;
    description: string;
}

// Configured for the camera files from Dr. Sam's GMPC executive training sessions
const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "gmpc-advanced-leadership",
        title: "Advanced Leadership & Strategic Thinking Masterclass",
        clientOrEvent: "Goldenmuv Premium Consulting",
        category: "masterclasses",
        imageSrc: "/images/gallery/303A9290.jpg",
        date: "Executive Masterclass",
        description:
            "Dr. Sam delivering an intensive session on 21st-century leadership dynamics, strategic emotional intelligence, and ethical corporate decision-making.",
    },
    {
        id: "gmpc-human-capital",
        title: "Human Capital Development & Team Optimization",
        clientOrEvent: "Corporate Skills Training Agency",
        category: "masterclasses",
        imageSrc: "/images/gallery/303A9288.jpg",
        date: "Executive Workshop",
        description:
            "Facilitating operational restructuring and talent optimization frameworks for senior management personnel and departmental directors.",
    },
    {
        id: "executive-alignment-session",
        title: "Institutional Governance & Business Transformation",
        clientOrEvent: "Executive Leadership Assembly",
        category: "retreats",
        imageSrc: "/images/gallery/303A0002.jpg",
        date: "Strategic Retreat",
        description:
            "Guiding executive leaders through strategic realignment, change resilience, and long-term institutional value preservation.",
    },
    {
        id: "strategic-risk-management",
        title: "Organizational Culture & Operational Leadership",
        clientOrEvent: "Corporate Board Advisory",
        category: "retreats",
        imageSrc: "/images/gallery/303A0004.jpg",
        date: "Boardroom Retreat",
        description:
            "Addressing high-level executive teams on building accountable, high-performance workplace cultures capable of navigating economic volatility.",
    },
    {
        id: "keynote-summit-address",
        title: "21st Century Public Sector & Corporate Leadership",
        clientOrEvent: "National Leadership Forum",
        category: "summits",
        imageSrc: "/images/gallery/303A0145.jpg",
        date: "Keynote Address",
        description:
            "Delivering high-impact paradigms on servant leadership, systemic accountability, and forward-looking institutional transformation.",
    },
    {
        id: "the-becoming-incubator",
        title: "The Becoming Community Leadership Incubator",
        clientOrEvent: "Emerging Leaders Cohort",
        category: "mentorship",
        imageSrc: "/images/speaking-stage.jpg",
        date: "Mentorship Summit",
        description:
            "Mentoring emerging African professionals, entrepreneurs, and changemakers in character architecture, purpose, and accountable execution.",
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const filterTabs: { label: string; value: Category }[] = [
        { label: "All Engagements", value: "all" },
        { label: "Executive Masterclasses", value: "masterclasses" },
        { label: "Board Retreats", value: "retreats" },
        { label: "Summits & Keynotes", value: "summits" },
        { label: "Mentorship & Incubator", value: "mentorship" },
    ];

    const filteredItems =
        activeCategory === "all"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Banner */}
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2">
                            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                FIELD IMPACT & MEDIA ARCHIVE
                            </span>
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.15]">
                            In Action: <br />
                            <span className="italic text-[#CC9F58]">Masterclasses, Summits & Executive Retreats</span>
                        </h1>
                        <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                            A visual chronicle of Dr. Immanuelson Sam facilitating institutional turnarounds,
                            delivering keynotes, and mentoring high-level leaders across Africa.
                        </p>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 border-b border-[#E8EDF4] pb-4">
                        <div className="hidden sm:flex items-center gap-2 mr-2 text-xs text-[#072954] uppercase tracking-wider font-bold">
                            <Filter className="w-3.5 h-3.5 text-[#CC9F58]" />
                            <span>Filter:</span>
                        </div>
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveCategory(tab.value)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeCategory === tab.value
                                        ? "bg-[#CC9F58] text-[#072954] shadow-sm"
                                        : "bg-[#FAF7F2] text-[#4A5568] hover:text-[#072954] hover:bg-[#E8EDF4] border border-[#E8EDF4]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Responsive Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="group rounded-2xl bg-white border border-[#E8EDF4] hover:border-[#CC9F58] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col justify-between shadow-xs"
                            >
                                {/* Image Canvas Frame */}
                                <div className="relative w-full aspect-[16/10] bg-[#FAF7F2] overflow-hidden">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#072954]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-md bg-white/95 border border-[#E8EDF4] text-[#072954] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                            {item.clientOrEvent}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Context & Caption */}
                                <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-[11px] text-[#4A5568]">
                                            <span className="capitalize font-semibold text-[#CC9F58]">{item.category}</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <h3 className="font-serif text-lg font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-[#4A5568] line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-[#E8EDF4] flex items-center justify-between text-xs font-bold text-[#072954] group-hover:text-[#CC9F58] transition-colors">
                                        <span>View Session Details</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#CC9F58]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Lightbox Modal */}
                    {selectedItem && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072954]/80 backdrop-blur-sm animate-in fade-in duration-200">
                            <div className="relative max-w-3xl w-full rounded-2xl bg-white border border-[#E8EDF4] overflow-hidden shadow-2xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-[#072954] hover:text-[#CC9F58] hover:bg-white shadow-md transition-colors"
                                    aria-label="Close Preview"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Modal Image */}
                                <div className="relative w-full aspect-[16/9] bg-[#072954]">
                                    <Image
                                        src={selectedItem.imageSrc}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Modal Context */}
                                <div className="p-6 sm:p-8 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2.5 py-0.5 rounded bg-[#CC9F58] text-[#072954] text-[10px] font-bold uppercase tracking-wider">
                                            {selectedItem.clientOrEvent}
                                        </span>
                                        <span className="text-xs text-[#4A5568] font-medium">• {selectedItem.date}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-[#072954]">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-sm text-[#4A5568] leading-relaxed">
                                        {selectedItem.description}
                                    </p>
                                    <div className="pt-4 flex items-center gap-3">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all"
                                        >
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>Book a Similar Engagement</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Retainer Callout */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                            Host Dr. Immanuelson Sam at Your Organization
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Equip your board, executive management team, or corporate conference with battle-tested frameworks for sustainable growth and governance.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                            >
                                <span>Check Availability & Book</span>
                                <ArrowRight className="w-4 h-4 text-[#072954]" />
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}