import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ExternalLink, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_METADATA, ACCREDITATIONS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-brand-surface border-t border-brand-border pt-16 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Upper Grid: Profile, Links, Regional Offices, Direct Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand & Mandate Summary */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="space-y-1">
                            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                                DR. IMMANUELSON SAM
                            </h3>
                            <p className="text-xs uppercase tracking-widest text-brand-gold font-medium">
                                {SITE_METADATA.title}[cite: 1]
                            </p>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                            Managing Partner at Goldenmuv Premium Consulting Limited (GMPC)[cite: 2]. Guiding executives,
                            ministers, and visionary founders to turn volatility into enduring opportunity[cite: 2, 3].
                        </p>
                        <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-brand-card border border-brand-border text-xs text-slate-300">
                            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                            <span>Certified Management Consultant (CMC) & YALI Fellow[cite: 3, 15]</span>
                        </div>
                    </div>

                    {/* Quick Platform Navigation */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
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
                                    Speaking & Masterclasses[cite: 17]
                                </Link>
                            </li>
                            <li>
                                <Link href="#ecosystem" className="hover:text-brand-gold transition-colors">
                                    The Becoming Ecosystem
                                </Link>
                            </li>
                            <li>
                                <Link href="#booking" className="hover:text-brand-gold transition-colors">
                                    Booking & Rate Inquiries[cite: 7]
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Regional Firm Presence (GMPC Offices) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                            Consulting Presence[cite: 4]
                        </h4>
                        <div className="space-y-3 text-xs text-slate-400">
                            <div>
                                <p className="font-semibold text-slate-200">Abuja Headquarters[cite: 4]:</p>
                                <p>Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse 2, Abuja, Nigeria[cite: 4]</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200">Kaduna Office[cite: 4]:</p>
                                <p>Suite 1, 1st Floor Sabr Plaza, Kachia Road, Kaduna[cite: 4]</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200">Katsina Office[cite: 4]:</p>
                                <p>No. 35 Yahaya Madaki Way, Katsina[cite: 4]</p>
                            </div>
                        </div>
                    </div>

                    {/* Direct Engagement & Inquiries */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                            Executive Inquiries[cite: 17]
                        </h4>
                        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                            <a
                                href={`mailto:${SITE_METADATA.email}`}
                                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                            >
                                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>{SITE_METADATA.email}[cite: 1, 17]</span>
                            </a>
                            <a
                                href={`tel:${SITE_METADATA.phone}`}
                                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                            >
                                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>{SITE_METADATA.phone}[cite: 1, 17]</span>
                            </a>
                            <a
                                href={SITE_METADATA.firmWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                            >
                                <Globe className="w-4 h-4 text-brand-gold shrink-0" />
                                <span>www.goldenmuv.com[cite: 1, 4, 17]</span>
                                <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                            </a>
                        </div>

                        {/* Social Handles */}
                        <div className="pt-2">
                            <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-2 font-medium">
                                Official Channels[cite: 17]
                            </p>
                            <div className="flex items-center gap-3 text-xs text-brand-gold-light">
                                <a
                                    href={SITE_METADATA.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    LinkedIn[cite: 1]
                                </a>
                                <span className="text-slate-600">•</span>
                                <a
                                    href={SITE_METADATA.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Instagram[cite: 1]
                                </a>
                                <span className="text-slate-600">•</span>
                                <a
                                    href={SITE_METADATA.socials.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Facebook[cite: 1]
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Banner: Accreditations Ticker & Copyright */}
                <div className="pt-8 border-t border-brand-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Dr. Immanuelson Sam. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={SITE_METADATA.firmWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-400 transition-colors"
                        >
                            Goldenmuv Premium Consulting[cite: 2]
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