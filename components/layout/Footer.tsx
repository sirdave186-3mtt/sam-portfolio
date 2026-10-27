import Link from "next/link";
import Image from "next/image";
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    ShieldCheck
} from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

// Declared outside component scope to prevent dynamic re-evaluation during render
const CURRENT_YEAR = new Date().getFullYear();

const NAVIGATION_LINKS = [
    { label: "The Mandate & Bio", href: "/about" },
    { label: "Keynote Speaking", href: "/speaking" },
    { label: "Services & Rate Card", href: "/rates" },
    { label: "Books & Publications", href: "/books" },
    { label: "Field Media Gallery", href: "/gallery" },
    { label: "Book Dr. Sam", href: "/contact" },
];

const PRACTICE_AREAS = [
    "Executive Leadership Transformation",
    "Strategic Risk & Capital Preservation",
    "Public Sector Reform & Governance",
    "Servant Leadership Masterclasses",
    "MSME Mentorship & Inclusion",
];

export default function Footer() {
    return (
        <footer className="bg-[#041A38] text-white border-t-2 border-[#CC9F58] relative">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

                    {/* Column 1: Identity & Executive Office */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="flex items-center gap-3.5 group">
                            <div className="relative w-11 h-11 rounded-xl bg-white/10 p-2 border border-[#CC9F58]/50 flex items-center justify-center shrink-0 group-hover:border-[#CC9F58] transition-colors">
                                <Image
                                    src="/images/icon.png"
                                    alt="Dr. Immanuelson Sam Emblem"
                                    width={34}
                                    height={34}
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#CC9F58] transition-colors">
                                    IMMANUELSON SAM
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#CC9F58] font-semibold">
                                    Global Speaker & Management Consultant
                                </span>
                            </div>
                        </Link>

                        <p className="text-xs sm:text-sm text-[#E8EDF4] leading-relaxed max-w-sm">
                            Managing Partner at Goldenmuv Premium Consulting Limited. Guiding corporate boards,
                            state governments, and emerging leaders through volatility and sustainable institutional triumph.
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#CC9F58] font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                            <span>Certified Management Consultant (CMC) • YALI Fellow</span>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                            Navigation
                        </h3>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-[#E8EDF4] hover:text-[#CC9F58] transition-colors block py-0.5"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Advisory Practices */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                            Practice Areas
                        </h3>
                        <ul className="space-y-2.5 text-xs text-[#E8EDF4]">
                            {PRACTICE_AREAS.map((practice, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#CC9F58] mt-1.5 shrink-0" />
                                    <span>{practice}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Executive Headquarters & Inquiries */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                            Executive Office
                        </h3>

                        <div className="space-y-3 text-xs text-[#E8EDF4]">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#CC9F58] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
                                </span>
                            </div>

                            <a
                                href={`mailto:${SITE_METADATA.email}`}
                                className="flex items-center gap-2.5 hover:text-[#CC9F58] transition-colors"
                            >
                                <Mail className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <span>{SITE_METADATA.email}</span>
                            </a>

                            <a
                                href={`tel:${SITE_METADATA.phone}`}
                                className="flex items-center gap-2.5 hover:text-[#CC9F58] transition-colors"
                            >
                                <Phone className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <span>{SITE_METADATA.phone}</span>
                            </a>

                            <a
                                href={SITE_METADATA.firmWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#CC9F58] hover:text-white transition-colors pt-1"
                            >
                                <span>Visit Goldenmuv Consulting (GMPC)</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sub-Footer Copyright Bar */}
            <div className="border-t border-white/10 bg-[#020D1D] py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8EDF4]">
                    <p>
                        © {CURRENT_YEAR} Dr. Immanuelson Sam. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/rates" className="hover:text-[#CC9F58] transition-colors">
                            Rate Card
                        </Link>
                        <Link href="/contact" className="hover:text-[#CC9F58] transition-colors">
                            Book Engagements
                        </Link>
                        <a
                            href="#top"
                            className="text-[#CC9F58] hover:text-white transition-colors"
                        >
                            Back to Top ↑
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}