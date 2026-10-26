import Link from "next/link";
import { Mail, Phone, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-brand-surface border-t border-brand-border pt-12 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 space-y-3">
                        <div className="space-y-0.5">
                            <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                                DR. IMMANUELSON SAM
                            </h3>
                            <p className="text-[11px] uppercase tracking-widest text-brand-gold font-medium">
                                {SITE_METADATA.title}
                            </p>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                            Managing Partner at Goldenmuv Premium Consulting Limited (GMPC). Guiding executives,
                            ministers, and visionary founders to turn volatility into enduring opportunity.
                        </p>
                        <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-brand-card border border-brand-border text-xs text-slate-300">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                            <span>Certified Management Consultant (CMC) & YALI Fellow</span>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li>
                                <Link href="#mandate" className="hover:text-brand-gold transition-colors">
                                    The Mandate & Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="#literary" className="hover:text-brand-gold transition-colors">
                                    "Time Code" Book
                                </Link>
                            </li>
                            <li>
                                <Link href="#speaking" className="hover:text-brand-gold transition-colors">
                                    Speaking & Masterclasses
                                </Link>
                            </li>
                            <li>
                                <Link href="#ecosystem" className="hover:text-brand-gold transition-colors">
                                    The Becoming Ecosystem
                                </Link>
                            </li>
                            <li>
                                <Link href="#booking" className="hover:text-brand-gold transition-colors">
                                    Booking & Rate Inquiries
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                            Consulting Presence
                        </h4>
                        <div className="space-y-2 text-xs text-slate-400">
                            <div>
                                <p className="font-semibold text-slate-200">Abuja Headquarters:</p>
                                <p>Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse 2</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200">Regional Offices:</p>
                                <p>Kaduna & Katsina, Nigeria</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                            Executive Inquiries
                        </h4>
                        <div className="space-y-2 text-xs text-slate-300">
                            <a
                                href={`mailto:${SITE_METADATA.email}`}
                                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                            >
                                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span>{SITE_METADATA.email}</span>
                            </a>
                            <a
                                href={`tel:${SITE_METADATA.phone}`}
                                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                            >
                                <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span>{SITE_METADATA.phone}</span>
                            </a>
                            <a
                                href={SITE_METADATA.firmWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                            >
                                <Globe className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span>www.goldenmuv.com</span>
                                <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                            </a>
                        </div>

                        <div className="pt-1">
                            <div className="flex items-center gap-3 text-xs text-brand-gold-light">
                                <a
                                    href={SITE_METADATA.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <span className="text-slate-600">•</span>
                                <a
                                    href={SITE_METADATA.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Instagram
                                </a>
                                <span className="text-slate-600">•</span>
                                <a
                                    href={SITE_METADATA.socials.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-brand-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>© 2026 Dr. Immanuelson Sam. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href={SITE_METADATA.firmWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-400 transition-colors"
                        >
                            Goldenmuv Premium Consulting
                        </a>
                        <span>•</span>
                        <a
                            href={SITE_METADATA.ecosystemUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-400 transition-colors"
                        >
                            The Becoming Community
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}