"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: "About", href: "/about" },
        { label: "Speaking", href: "/speaking" },
        { label: "Rate Card", href: "/rates" },
        { label: "Books", href: "/books" },
        { label: "Gallery", href: "/gallery" },
        { label: "Consulting Firm", href: SITE_METADATA.firmWebsite, external: true },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8EDF4] shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Authentic Full-Colour Logo on Crisp White (Brand Guide Page 7) */}
                    <Link href="/" className="flex items-center gap-3.5 group">
                        <div className="relative w-12 h-12 shrink-0">
                            <Image
                                src="/images/icon.png"
                                alt="Dr. Immanuelson Sam Official Logo"
                                fill
                                priority
                                sizes="48px"
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#072954] group-hover:text-[#CC9F58] transition-colors leading-tight">
                                IMMANUELSON SAM
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#CC9F58] font-semibold">
                                Global Speaker & Management Consultant
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs uppercase tracking-wider font-semibold text-[#072954] hover:text-[#CC9F58] transition-colors flex items-center gap-1"
                                >
                                    <span>{link.label}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#CC9F58]" />
                                </a>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-xs uppercase tracking-wider font-semibold transition-colors py-1 border-b-2 ${isActive(link.href)
                                            ? "text-[#CC9F58] border-[#CC9F58]"
                                            : "text-[#072954] border-transparent hover:text-[#CC9F58]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Gold Button with Navy Text (Brand Guide Page 4 Strict Rule) */}
                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-[#072954] hover:bg-[#FAF7F2] border border-[#E8EDF4]"
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <X className="w-6 h-6 text-[#CC9F58]" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="lg:hidden bg-white border-b border-[#E8EDF4] px-4 pt-4 pb-6 space-y-3">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-semibold text-[#072954] hover:text-[#CC9F58] py-2 border-b border-[#E8EDF4] flex items-center justify-between"
                                >
                                    <span>{link.label}</span>
                                    <ArrowUpRight className="w-4 h-4 text-[#CC9F58]" />
                                </a>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-semibold py-2 border-b border-[#E8EDF4] ${isActive(link.href) ? "text-[#CC9F58]" : "text-[#072954] hover:text-[#CC9F58]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="pt-2">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all"
                        >
                            Book Dr. Sam to Speak
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}