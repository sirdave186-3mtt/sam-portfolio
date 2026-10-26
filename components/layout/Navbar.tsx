"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Calendar, ArrowUpRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navLinks = [
        { label: "The Mandate", targetId: "mandate" },
        { label: "Time Code", targetId: "literary" },
        { label: "Speaking", targetId: "speaking" },
        { label: "Rate Card", targetId: "rates" },
        { label: "Ecosystem", targetId: "ecosystem" },
        { label: "Consulting Firm", href: SITE_METADATA.firmWebsite, external: true },
    ];

    const handleScrollTo = (targetId: string) => {
        setIsOpen(false);
        if (pathname === "/") {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `#${targetId}`);
            }
        } else {
            router.push(`/#${targetId}`);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Insignia & Wordmark */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                            <BrandLogo className="w-10 h-10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors">
                                DR. IMMANUELSON SAM
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-brand-gold font-medium">
                                Global Speaker & Strategist
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs uppercase tracking-wider text-slate-300 hover:text-brand-gold transition-colors flex items-center gap-1 font-medium"
                                >
                                    <span>{link.label}</span>
                                    <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                                </a>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() => link.targetId && handleScrollTo(link.targetId)}
                                    className="text-xs uppercase tracking-wider text-slate-300 hover:text-brand-gold transition-colors font-medium cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                    </nav>

                    {/* Primary CTA */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={() => handleScrollTo("booking")}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-gold-glow cursor-pointer"
                        >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Dr. Sam</span>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-surface border border-brand-border"
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <X className="w-6 h-6 text-brand-gold" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-brand-surface border-b border-brand-border px-4 pt-4 pb-6 space-y-3">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-slate-300 hover:text-brand-gold py-2 border-b border-brand-border/40 flex items-center justify-between"
                                >
                                    <span>{link.label}</span>
                                    <ArrowUpRight className="w-4 h-4 text-brand-gold" />
                                </a>
                            ) : (
                                <button
                                    key={link.label}
                                    onClick={() => link.targetId && handleScrollTo(link.targetId)}
                                    className="text-left text-sm font-medium text-slate-300 hover:text-brand-gold py-2 border-b border-brand-border/40"
                                >
                                    {link.label}
                                </button>
                            )
                        )}
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={() => handleScrollTo("booking")}
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-gold-glow"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Dr. Sam to Speak</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}