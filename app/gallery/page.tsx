"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Camera, Calendar, ArrowRight, X, Sparkles, Filter } from "lucide-react";

type Category = "all" | "retreats" | "masterclasses" | "summits" | "mentorship";

interface GalleryItem {
    id: string;
    title: string;
    clientOrEvent: string;
    category: "retreats" | "masterclasses" | "summits" | "mentorship";
    imageSrc: string;
    date: string;
    description: string;
}

// Initial gallery dataset using existing project assets as structured placeholders
const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "mangal-retreat",
        title: "Corporate Culture & Strategic Governance Retreat",
        clientOrEvent: "Mangal Cement Senior Leadership",
        category: "retreats",
        imageSrc: "/images/speaking-stage.jpg",
        date: "Executive Session",
        description:
            "Facilitating high-level corporate culture alignment, performance management, and team leadership strategies.",
    },
    {
        id: "executive-coaching",
        title: "1-on-1 Strategic Leadership Counsel",
        clientOrEvent: "Corporate C-Suite Advisory",
        category: "masterclasses",
        imageSrc: "/images/hero-portrait.png",
        date: "Private Consultation",
        description:
            "Private advisory sessions guiding corporate executives and founders through risk mitigation and institutional restructuring.",
    },
    {
        id: "governance-summit",
        title: "Public Sector Reform & Servant Leadership Address",
        clientOrEvent: "West African Governance Summit",
        category: "summits",
        imageSrc: "/images/speaking-stage.jpg",
        date: "Keynote Summit",
        description:
            "Delivering the keynote address on driving systemic accountability, civic stewardship, and operational transparency.",
    },
    {
        id: "becoming-mentorship",
        title: "The Becoming Community Leadership Incubator",
        clientOrEvent: "Young Leaders Cohort",
        category: "mentorship",
        imageSrc: "/images/hero-portrait.png",
        date: "Mentorship Gathering",
        description:
            "Mentoring emerging African changemakers and young entrepreneurs in character architecture, purpose, and execution.",
    },
    {
        id: "boa-training",
        title: "Credit Risk Architecture & Performance Optimization",
        clientOrEvent: "Bank of Agriculture (BOA)",
        category: "masterclasses",
        imageSrc: "/images/speaking-stage.jpg",
        date: "Banking Masterclass",
        description:
            "Intensive financial advisory workshop focusing on credit structuring, underwriting disciplines, and portfolio performance.",
    },
    {
        id: "state-retreat",
        title: "State Executive Council Governance Workshop",
        clientOrEvent: "State Government Advisory",
        category: "retreats",
        imageSrc: "/images/speaking-stage.jpg",
        date: "Executive Council",
        description:
            "Guiding state cabinet commissioners and permanent secretaries through institutional transition planning and public value delivery.",
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const filterTabs: { label: string; value: Category }[] = [
        { label: "All Engagements", value: "all" },
        { label: "Board Retreats", value: "retreats" },
        { label: "Executive Masterclasses", value: "masterclasses" },
        { label: "Summits & Keynotes", value: "summits" },
        { label: "The Becoming Mentorship", value: "mentorship" },
    ];

    const filteredItems =
        activeCategory === "all"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Banner */}
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                            <span className="w-6 h-[1px] bg-brand-gold" />
                            Field Impact & Media Archive
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            In Action: <br />
                            <span className="text-brand-gold italic">Summits, Retreats & Masterclasses</span>
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            A visual chronicle of Dr. Immanuelson Sam facilitating institutional turnarounds,
                            delivering keynotes, and mentoring emerging leaders across Africa.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 border-b border-brand-border pb-4">
                        <div className="hidden sm:flex items-center gap-2 mr-2 text-xs text-slate-500 uppercase tracking-wider font-semibold">
                            <Filter className="w-3.5 h-3.5 text-brand-gold" />
                            <span>Filter:</span>
                        </div>
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveCategory(tab.value)}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${activeCategory === tab.value
                                        ? "bg-brand-gold text-black shadow-gold-glow"
                                        : "bg-brand-card/80 text-slate-400 hover:text-white hover:bg-brand-surface border border-brand-border"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className="group rounded-2xl bg-brand-card border border-brand-border hover:border-brand-gold-border overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-3px] flex flex-col justify-between shadow-lg"
                            >
                                {/* Image Frame */}
                                <div className="relative w-full aspect-[16/10] bg-black overflow-hidden">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute top-3 left-3">
                                        <span className="px-2.5 py-1 rounded bg-brand-surface/90 border border-brand-gold-border/40 text-brand-gold text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                                            {item.clientOrEvent}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Caption */}
                                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                                            <span className="capitalize">{item.category}</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-gold group-hover:text-white transition-colors">
                                        <span>View Session Details</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox / Modal */}
                    {selectedItem && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
                            <div className="relative max-w-3xl w-full rounded-2xl bg-brand-surface border border-brand-gold-border/50 overflow-hidden shadow-2xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-brand-gold hover:bg-black/90 transition-colors"
                                    aria-label="Close Preview"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Modal Image */}
                                <div className="relative w-full aspect-[16/9] bg-black">
                                    <Image
                                        src={selectedItem.imageSrc}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Modal Details */}
                                <div className="p-6 sm:p-8 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2.5 py-0.5 rounded bg-brand-gold text-black text-[10px] font-bold uppercase tracking-wider">
                                            {selectedItem.clientOrEvent}
                                        </span>
                                        <span className="text-xs text-slate-400">• {selectedItem.date}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-white">
                                        {selectedItem.title}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {selectedItem.description}
                                    </p>
                                    <div className="pt-4 flex items-center gap-3">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200"
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
                    <div className="rounded-2xl bg-brand-card/70 border border-brand-border p-8 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                            Host Dr. Immanuelson Sam at Your Organization
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Transform your leadership team, conference, or corporate retreat with battle-tested frameworks for sustainable growth.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                            >
                                <span>Check Availability & Book</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}