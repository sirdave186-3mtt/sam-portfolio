"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, ArrowUpRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "The Mandate", href: "#mandate" },
        { label: "Time Code", href: "#literary" },
        { label: "Speaking", href: "#speaking" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "Consulting Firm", href: SITE_METADATA.firmWebsite, external: true },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border shadow-lg"
                    : "bg-transparent border-b border-white/5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Wordmark */}
                    <Link href="/" className="flex flex-col group">
                        <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors">
                            DR. IMMANUELSON SAM
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-medium">
                            Global Speaker & Strategist[cite: 1]
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
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
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-xs uppercase tracking-wider text-slate-300 hover:text-brand-gold transition-colors font-medium"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Primary CTA */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="#booking"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-gold-glow"
                        >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Dr. Sam[cite: 17]</span>
                        </Link>
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

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <div className="md:hidden bg-brand-surface border-b border-brand-border px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-2">
                    <div className="flex flex-col space-y-3">
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
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-slate-300 hover:text-brand-gold py-2 border-b border-brand-border/40"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    <div className="pt-2">
                        <Link
                            href="#booking"
                            onClick={() => setIsOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-gold-glow"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Dr. Sam to Speak[cite: 17]</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}