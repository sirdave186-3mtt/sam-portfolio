import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/forms/BookingForm";
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2, FileText } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Book Dr. Immanuelson Sam | Keynotes, Consulting & Advisory",
    description:
        "Direct booking inquiry portal for Dr. Immanuelson Sam. Schedule keynote speaking engagements, executive leadership masterclasses, and strategic management consulting.",
};

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Banner */}
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                            <span className="w-6 h-[1px] bg-brand-gold" />
                            Executive Engagements & Inquiries
                        </div>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Engage Dr. Immanuelson Sam <br />
                            <span className="text-brand-gold italic">for Your Next Milestone</span>
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Submit your inquiry for keynote addresses, corporate masterclasses, executive retreats,
                            or strategic advisory retainers. Dr. Sam&apos;s executive office reviews and responds within 24–48 hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        {/* Left Column: Direct Office Contact & Protocol */}
                        <div className="lg:col-span-5 space-y-6">

                            {/* Direct Details Card */}
                            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-5">
                                <h2 className="font-serif text-xl font-bold text-white">
                                    Executive Advisory Office
                                </h2>

                                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                                    <a
                                        href={`mailto:${SITE_METADATA.email}`}
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-card hover:border-brand-gold border border-transparent transition-all"
                                    >
                                        <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Direct Email</p>
                                            <p className="font-medium text-white">{SITE_METADATA.email}</p>
                                        </div>
                                    </a>

                                    <a
                                        href={`tel:${SITE_METADATA.phone}`}
                                        className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-card hover:border-brand-gold border border-transparent transition-all"
                                    >
                                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Telephone / WhatsApp</p>
                                            <p className="font-medium text-white">{SITE_METADATA.phone}</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-card border border-transparent">
                                        <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Corporate Headquarters</p>
                                            <p className="text-white text-xs leading-relaxed">
                                                Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Link
                                        href="/rates"
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-brand-border bg-brand-card hover:bg-brand-surface text-brand-gold text-xs font-semibold uppercase tracking-wider transition-all"
                                    >
                                        <FileText className="w-3.5 h-3.5" />
                                        <span>Review Transparent Rate Card First</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Booking Logistics Protocol */}
                            <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border space-y-4">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>Engagement Protocols</span>
                                </div>

                                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                                        <span>Keynote bookings should ideally be requested at least 3 to 6 weeks in advance of the target date.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                                        <span>Engagement fees exclude flights, executive logistics, accommodation, and statutory VAT unless bundled into corporate retainers.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                                        <span>Virtual summits and masterclasses are delivered using ultra-low latency, studio-grade audiovisual setups.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: Form */}
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