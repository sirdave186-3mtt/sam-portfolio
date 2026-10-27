import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Book Dr. Immanuelson Sam | Keynotes, Consulting & Advisory",
    description:
        "Direct booking inquiry portal for Dr. Immanuelson Sam. Schedule keynote speaking engagements, executive leadership masterclasses, and strategic management consulting.",
};

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Banner */}
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2">
                            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                EXECUTIVE ENGAGEMENTS & BOOKINGS
                            </span>
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.15]">
                            Engage Dr. Immanuelson Sam <br />
                            <span className="italic text-[#CC9F58]">for Your Next Milestone</span>
                        </h1>
                        <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed">
                            Submit your inquiry for keynote addresses, corporate masterclasses, executive board retreats,
                            or strategic advisory retainers. Dr. Sam&apos;s executive office reviews and responds within 24–48 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        {/* Left Column: Direct Office Contact & Protocols */}
                        <div className="lg:col-span-5 space-y-6">

                            {/* Direct Details Card */}
                            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs">
                                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#072954]">
                                    Executive Advisory Office
                                </h2>

                                <div className="space-y-3.5 text-xs sm:text-sm">
                                    <a
                                        href={`mailto:${SITE_METADATA.email}`}
                                        className="flex items-center gap-3.5 p-4 rounded-2xl bg-white hover:border-[#CC9F58] border border-[#E8EDF4] transition-all shadow-xs group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8EDF4] flex items-center justify-center text-[#CC9F58] shrink-0 group-hover:bg-[#CC9F58] group-hover:text-[#072954] transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-[#4A5568] font-bold">Direct Email</p>
                                            <p className="font-semibold text-[#072954] group-hover:text-[#CC9F58] transition-colors">{SITE_METADATA.email}</p>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${SITE_METADATA.phone}`}
                                        className="flex items-center gap-3.5 p-4 rounded-2xl bg-white hover:border-[#CC9F58] border border-[#E8EDF4] transition-all shadow-xs group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8EDF4] flex items-center justify-center text-[#CC9F58] shrink-0 group-hover:bg-[#CC9F58] group-hover:text-[#072954] transition-colors">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-[#4A5568] font-bold">Telephone / WhatsApp</p>
                                            <p className="font-semibold text-[#072954] group-hover:text-[#CC9F58] transition-colors">{SITE_METADATA.phone}</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E8EDF4] shadow-xs">
                                        <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8EDF4] flex items-center justify-center text-[#CC9F58] shrink-0 mt-0.5">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-[#4A5568] font-bold">Corporate Headquarters</p>
                                            <p className="text-[#072954] text-xs sm:text-sm font-medium leading-relaxed">
                                                Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Link
                                        href="/rates"
                                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                    >
                                        <FileText className="w-4 h-4 text-[#CC9F58]" />
                                        <span>Review Transparent Rate Card First</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#CC9F58]" />
                                    </Link>
                                </div>
                            </div>

                            {/* Booking Logistics Protocol */}
                            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-4 shadow-xs">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#072954]">
                                    <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Engagement Protocols</span>
                                </div>

                                <ul className="space-y-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0 mt-0.5" />
                                        <span>Keynote bookings should ideally be requested at least <strong>3 to 6 weeks</strong> in advance of the target event date.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0 mt-0.5" />
                                        <span>Engagement fees exclude flights, executive logistics, accommodation, and statutory VAT unless bundled into corporate retainers.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0 mt-0.5" />
                                        <span>Virtual summits and masterclasses are broadcast with studio-grade audiovisual setups.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: High-Contrast Booking Form */}
                        <div className="lg:col-span-7">
                            <BookingForm />
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}