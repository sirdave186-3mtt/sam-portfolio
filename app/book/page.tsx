"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Calendar, ArrowRight, Clock, Phone } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

const EMBED_FORM_URL =
    "https://docs.google.com/forms/d/1hZvcpewuhBot5TeD07T7_lmtxqhSvpIWjwuitRrpGUM/viewform?embedded=true";

export default function BookPage() {
    const [isFormLoading, setIsFormLoading] = useState(true);

    return (
        <div className="relative min-h-screen bg-[#FAF7F2] text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-8">

                    {/* Top Subpage Header */}
                    <div className="bg-white rounded-3xl border border-[#E8EDF4] p-6 sm:p-10 shadow-xs space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8EDF4] pb-4">
                            <div className="inline-flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#CC9F58]" />
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    EXECUTIVE ENGAGEMENT PORTAL
                                </span>
                            </div>
                            <Link
                                href="/speaking"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#072954] hover:text-[#CC9F58] transition-colors"
                            >
                                <span>View Speaking Topics</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#CC9F58]" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                            <div className="lg:col-span-8 space-y-2">
                                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                                    Schedule an Engagement with Dr. Immanuelson Sam
                                </h1>
                                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                    Complete the official engagement brief below. Our Executive Secretariat reviews
                                    all submissions and responds within 24–48 business hours.
                                </p>
                            </div>

                            <div className="lg:col-span-4 bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8EDF4] space-y-2 text-xs">
                                <div className="flex items-center gap-2 font-bold text-[#072954]">
                                    <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                                    <span>Direct Secretariat Desk</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#4A5568]">
                                    <Phone className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                    <span>{SITE_METADATA.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#4A5568]">
                                    <Clock className="w-3.5 h-3.5 text-[#CC9F58] shrink-0" />
                                    <span>Mon – Fri: 08:00 – 18:00 (WAT)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Embedded Form Container with Rolling Loader Overlay */}
                    <div className="relative bg-white rounded-3xl border border-[#E8EDF4] p-2 sm:p-6 shadow-md overflow-hidden min-h-[600px]">

                        {isFormLoading && (
                            <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-start pt-20 sm:pt-28 px-4 text-center space-y-4">
                                <div className="relative flex items-center justify-center">
                                    {/* Outer subtle ring + spinning Heritage Gold arc */}
                                    <div className="w-12 h-12 rounded-full border-4 border-[#E8EDF4] border-t-[#CC9F58] border-r-[#072954] animate-spin" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-serif text-base sm:text-lg font-bold text-[#072954]">
                                        Loading Official Booking Form...
                                    </p>
                                    <p className="text-xs text-[#4A5568] max-w-xs mx-auto">
                                        Please wait a moment while we establish a secure connection to the Secretariat portal.
                                    </p>
                                </div>
                            </div>
                        )}

                        <iframe
                            src={EMBED_FORM_URL}
                            width="100%"
                            height="2800"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            onLoad={() => setIsFormLoading(false)}
                            title="Dr. Immanuelson Sam Booking Form"
                            className={`w-full rounded-2xl bg-white overflow-hidden transition-opacity duration-500 ${isFormLoading ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            Loading official booking form…
                        </iframe>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}