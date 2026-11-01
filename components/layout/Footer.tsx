import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE_METADATA, STANDARDIZED_TITLE } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="w-full bg-[#041A38] text-white border-t border-[#072954]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Identity & Standardized Title */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-1">
                                <Image
                                    src="/icon.png"
                                    alt="Dr. Immanuelson Sam Logo"
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                                    IMMANUELSON SAM
                                </h3>
                            </div>
                        </div>

                        {/* Standardized Title Underneath Name */}
                        <p className="text-xs font-semibold text-[#CC9F58] tracking-wide leading-relaxed">
                            {STANDARDIZED_TITLE}
                        </p>

                        <p className="text-xs text-[#E8EDF4]/80 leading-relaxed max-w-sm pt-1">
                            Equipping executives, boards, and emerging leaders across Africa with the
                            character, strategic clarity, and discipline required to command uncertainty.
                        </p>
                    </div>

                    {/* Direct Navigation */}
                    <div className="md:col-span-3 space-y-3">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#CC9F58]">
                            Navigation
                        </p>
                        <ul className="space-y-2 text-xs text-[#E8EDF4]/90">
                            <li>
                                <Link href="/about" className="hover:text-[#CC9F58] transition-colors">
                                    The Mandate & Biography
                                </Link>
                            </li>
                            <li>
                                <Link href="/speaking" className="hover:text-[#CC9F58] transition-colors">
                                    Keynotes & Masterclasses
                                </Link>
                            </li>
                            <li>
                                <Link href="/rates" className="hover:text-[#CC9F58] transition-colors">
                                    Rate Card & Advisory Schedule
                                </Link>
                            </li>
                            <li>
                                <Link href="/books" className="hover:text-[#CC9F58] transition-colors">
                                    The Time Code & Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-[#CC9F58] transition-colors">
                                    Field Media Archive
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={SITE_METADATA.firmWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[#CC9F58] hover:underline"
                                >
                                    <span>Goldenmuv Consulting</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="md:col-span-4 space-y-3">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#CC9F58]">
                            Executive Secretariat
                        </p>
                        <div className="space-y-2.5 text-xs text-[#E8EDF4]/90">
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <a
                                    href={`mailto:${SITE_METADATA.email}`}
                                    className="hover:text-[#CC9F58] transition-colors"
                                >
                                    {SITE_METADATA.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <a
                                    href={`tel:${SITE_METADATA.phone.replace(/\s+/g, "")}`}
                                    className="hover:text-[#CC9F58] transition-colors"
                                >
                                    {SITE_METADATA.phone}
                                </a>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#CC9F58] shrink-0 mt-0.5" />
                                <span>Abuja, Federal Capital Territory, Nigeria</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8EDF4]/60">
                    <p>
                        {"\u00A9"} 2026 Dr. Immanuelson Sam. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/terms" className="hover:text-[#CC9F58] transition-colors">
                            Terms of Use
                        </Link>
                        <Link href="/contact" className="hover:text-[#CC9F58] transition-colors">
                            Contact Office
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}