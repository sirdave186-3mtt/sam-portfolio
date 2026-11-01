"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Camera,
    X,
    Maximize2,
    ArrowRight,
    ArrowUpRight,
    MapPin,
    Calendar
} from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

type GalleryCategory = "All" | "Keynotes & Summits" | "Executive Advisory" | "Honorary & Press";

interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    category: "Keynotes & Summits" | "Executive Advisory" | "Honorary & Press";
    title: string;
    location: string;
    year: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: "g01",
        src: "/images/gallery/gallery-01.jpg",
        alt: "Dr. Immanuelson Sam delivering keynote address at national summit",
        category: "Keynotes & Summits",
        title: "National Leadership & Governance Summit",
        location: "Abuja, Nigeria",
        year: "2025",
    },
    {
        id: "g02",
        src: "/images/gallery/gallery-02.jpg",
        alt: "Corporate executive boardroom retreat facilitation",
        category: "Executive Advisory",
        title: "C-Suite Strategic Retreat & Risk Alignment",
        location: "Lagos, Nigeria",
        year: "2025",
    },
    {
        id: "g03",
        src: "/images/gallery/gallery-03.jpg",
        alt: "Executive leadership and strategic alignment masterclass",
        category: "Executive Advisory",
        title: "Executive Leadership & Governance Intensive",
        location: "Continental Hub",
        year: "2025",
    },
    {
        id: "g04",
        src: "/images/gallery/gallery-04.jpg",
        alt: "Dr. Immanuelson Sam official executive portrait",
        category: "Honorary & Press",
        title: "Official Executive Portrait & Fellowship Citation",
        location: "Executive Secretariat",
        year: "2025",
    },
    {
        id: "g05",
        src: "/images/gallery/gallery-05.jpg",
        alt: "Keynote presentation to financial and banking executives",
        category: "Keynotes & Summits",
        title: "Banking & Financial Services Annual Conference",
        location: "Abuja, Nigeria",
        year: "2024",
    },
    {
        id: "g06",
        src: "/images/gallery/gallery-06.jpg",
        alt: "High-level bilateral corporate consultation session",
        category: "Executive Advisory",
        title: "Boardroom Governance & Risk Architecture",
        location: "Private Executive Suite",
        year: "2024",
    },
    {
        id: "g07",
        src: "/images/gallery/gallery-07.jpg",
        alt: "Continental youth and emerging enterprise leaders symposium",
        category: "Keynotes & Summits",
        title: "Continental Leadership & Enterprise Assembly",
        location: "Abuja, Nigeria",
        year: "2024",
    },
    {
        id: "g08",
        src: "/images/gallery/gallery-08.jpg",
        alt: "Keynote address on institutional transformation",
        category: "Keynotes & Summits",
        title: "Public Sector Reform & Institutional Excellence",
        location: "Kano, Nigeria",
        year: "2024",
    },
    {
        id: "g09",
        src: "/images/gallery/gallery-09.jpg",
        alt: "Dr. Immanuelson Sam receiving professional honors and citations",
        category: "Honorary & Press",
        title: "Institute of Management Consultants Induction",
        location: "Abuja, Nigeria",
        year: "2023",
    },
    {
        id: "g10",
        src: "/images/gallery/gallery-10.jpg",
        alt: "The School of Talents author keynote and career strategy session",
        category: "Keynotes & Summits",
        title: "Career Architecture & Placement Keynote",
        location: "National Convention Centre",
        year: "2024",
    },
    {
        id: "g11",
        src: "/images/gallery/gallery-11.jpg",
        alt: "Executive strategy session with corporate management board",
        category: "Executive Advisory",
        title: "Enterprise Restructuring & Performance Audit",
        location: "Lagos, Nigeria",
        year: "2023",
    },
    {
        id: "g12",
        src: "/images/gallery/gallery-12.jpg",
        alt: "Keynote speaking at pan-African development convention",
        category: "Keynotes & Summits",
        title: "Pan-African Youth & Economic Development Convention",
        location: "Accra, Ghana",
        year: "2023",
    },
    {
        id: "g13",
        src: "/images/gallery/gallery-13.jpg",
        alt: "Corporate transformation and organizational redesign workshop",
        category: "Executive Advisory",
        title: "Corporate Transformation & Strategy Alignment",
        location: "Abuja, Nigeria",
        year: "2024",
    },
    {
        id: "g14",
        src: "/images/gallery/gallery-14.jpg",
        alt: "Leadership development and capacity building workshop",
        category: "Executive Advisory",
        title: "Institutional Capacity Building & Values Workshop",
        location: "Kigali, Rwanda",
        year: "2024",
    },
    {
        id: "g15",
        src: "/images/gallery/gallery-15.jpg",
        alt: "Commercial banking and executive treasury roundtable",
        category: "Keynotes & Summits",
        title: "West African Commercial Banking Roundtable",
        location: "Lagos, Nigeria",
        year: "2024",
    },
    {
        id: "g16",
        src: "/images/gallery/gallery-16.jpg",
        alt: "Media interview and live thought leadership broadcast",
        category: "Honorary & Press",
        title: "International Speaker Recognition & Media Feature",
        location: "Abuja, Nigeria",
        year: "2024",
    },
    {
        id: "g17",
        src: "/images/gallery/gallery-17.jpg",
        alt: "Ministerial advisory committee and public policy consultation",
        category: "Executive Advisory",
        title: "Ministerial Advisory & Public Policy Workshop",
        location: "Abuja, Nigeria",
        year: "2025",
    },
    {
        id: "g18",
        src: "/images/gallery/gallery-18.jpg",
        alt: "Strategic executive leadership colloquium",
        category: "Executive Advisory",
        title: "Executive Leadership Colloquium",
        location: "Abuja, Nigeria",
        year: "2025",
    },
    {
        id: "g19",
        src: "/images/gallery/gallery-19.jpg",
        alt: "Corporate governance and institutional ethics convention",
        category: "Keynotes & Summits",
        title: "Annual Corporate Governance & Ethics Summit",
        location: "Port Harcourt, Nigeria",
        year: "2023",
    },
    {
        id: "g20",
        src: "/images/gallery/gallery-20.jpg",
        alt: "Author presentation and leadership citation ceremony",
        category: "Honorary & Press",
        title: "Executive Leadership Citation & Book Presentation",
        location: "Lagos, Nigeria",
        year: "2024",
    },
    {
        id: "g21",
        src: "/images/gallery/gallery-21.jpg",
        alt: "Executive board retreat and long-term roadmap planning",
        category: "Executive Advisory",
        title: "Board Retreat & Strategic Long-Term Planning",
        location: "Transcorp Hilton, Abuja",
        year: "2025",
    },
    {
        id: "g22",
        src: "/images/gallery/gallery-22.jpg",
        alt: "Continental keynote on industrialization and emerging enterprise",
        category: "Keynotes & Summits",
        title: "African Innovation & Industrialization Summit",
        location: "Nairobi, Kenya",
        year: "2024",
    },
    {
        id: "g23",
        src: "/images/gallery/gallery-23.jpg",
        alt: "High-level student and emerging professional leadership address",
        category: "Keynotes & Summits",
        title: "Leadership & Future Competencies Masterclass",
        location: "Abuja, Nigeria",
        year: "2025",
    },
    {
        id: "g24",
        src: "/images/gallery/gallery-24.jpg",
        alt: "High-performance leadership intensive for corporate executives",
        category: "Keynotes & Summits",
        title: "High-Performance Leadership Masterclass",
        location: "Lagos, Nigeria",
        year: "2025",
    },
    {
        id: "g25",
        src: "/images/gallery/gallery-25.jpg",
        alt: "National broadcast feature on leadership and economic reform",
        category: "Honorary & Press",
        title: "National Media Feature & Thought Leadership Broadcast",
        location: "Abuja, Nigeria",
        year: "2025",
    },
];

const CATEGORIES: GalleryCategory[] = [
    "All",
    "Keynotes & Summits",
    "Executive Advisory",
    "Honorary & Press",
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const filteredItems = activeCategory === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-14">

                    {/* Executive Split Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8EDF4] pb-12">

                        {/* Left Column: Heading & Executive Mission (7 cols) */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    VISUAL CHRONICLES & ENGAGEMENTS
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Field Media Archive & <br />
                                <span className="italic text-[#CC9F58]">Continental Engagements</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                A documentary archive of keynote addresses, C-suite boardroom retreats,
                                and institutional transformation sessions across Africa.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Calendar className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Invite to Your Next Event</span>
                                </Link>
                                <a
                                    href={SITE_METADATA.becomingCommunityWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <span>The Becoming Community</span>
                                    <ArrowUpRight className="w-4 h-4 text-[#CC9F58]" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Gallery Snapshot (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <Camera className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Media Archive Status
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">PHOTO-DOC</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">
                                            {GALLERY_ITEMS.length}
                                        </span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Curated Documentary Moments</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">3 Pillars</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Keynotes, Advisory & Press</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">High-Res</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Press & Media Kit Ready Imagery</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Pan-Africa</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Summits & Institutional Engagements</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Press & Event Enquiries</p>
                                        <p className="text-[11px] text-[#4A5568]">Direct media access & speaker photography</p>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                    >
                                        <span>Request Kit</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Category Filter Pills (3 Categories + All) */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${activeCategory === category
                                        ? "bg-[#072954] text-white shadow-sm"
                                        : "bg-[#FAF7F2] text-[#4A5568] hover:bg-[#E8EDF4] hover:text-[#072954] border border-[#E8EDF4]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* High-Density Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item)}
                                className="group relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8EDF4] aspect-[4/3] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#072954]/90 via-[#072954]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                                            {item.category}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                            <Maximize2 className="w-3.5 h-3.5" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="font-serif text-sm font-bold text-white leading-tight">
                                            {item.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-[11px] text-[#CC9F58]">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {item.location}
                                            </span>
                                            <span>•</span>
                                            <span>{item.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lightbox Modal */}
                    {selectedImage && (
                        <div
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-50 bg-[#041A38]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
                        >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 space-y-4"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#072954]/80 hover:bg-[#072954] text-white flex items-center justify-center transition-colors cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Modal Image */}
                                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#072954]">
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        fill
                                        sizes="(max-width: 1200px) 100vw, 1000px"
                                        className="object-contain"
                                    />
                                </div>

                                {/* Caption Bar */}
                                <div className="p-6 pt-2 pb-6 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#FAF7F2] text-[#072954] border border-[#E8EDF4]">
                                            {selectedImage.category}
                                        </span>
                                        <span className="text-xs font-mono text-[#4A5568]">
                                            {selectedImage.location} • {selectedImage.year}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[#072954]">
                                        {selectedImage.title}
                                    </h3>
                                    <p className="text-xs text-[#4A5568]">
                                        {selectedImage.alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Retainer Callout */}
                    <div className="rounded-3xl bg-[#072954] text-white p-8 sm:p-12 text-center space-y-4">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold !text-white">
                            Host Dr. Immanuelson Sam at Your Organization
                        </h3>
                        <p className="text-[#E8EDF4] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                            Equip your board, executive team, or national conference with battle-tested frameworks for sustainable growth and governance.
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