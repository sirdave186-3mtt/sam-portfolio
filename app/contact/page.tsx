"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Calendar,
    Send,
    CheckCircle2,
    AlertCircle,
    ShieldCheck,
    ArrowRight,
    Sparkles,
    Building2,
    FileText
} from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        engagementType: "Keynote Speaking (Physical)",
        expectedDate: "",
        locationOrFormat: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.message || "Failed to submit booking inquiry. Please try again.");
            }

            setStatus("success");
            setFormData({
                fullName: "",
                organization: "",
                email: "",
                phone: "",
                engagementType: "Keynote Speaking (Physical)",
                expectedDate: "",
                locationOrFormat: "",
                message: "",
            });
        } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message || "An unexpected error occurred. Please contact the office directly.");
        }
    };

    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">

                    {/* Executive Split Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E8EDF4] pb-12">

                        {/* Left Column: Heading & Executive Mission (7 cols) */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                    EXECUTIVE ENGAGEMENTS & BOOKINGS
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072954] tracking-tight leading-[1.12]">
                                Engage Dr. Immanuelson <br />
                                <span className="italic text-[#CC9F58]">Sam for Your Next Milestone</span>
                            </h1>

                            <p className="text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-2xl">
                                Submit your inquiry for keynote addresses, corporate masterclasses, executive board retreats,
                                or strategic advisory retainers. Dr. Sam&apos;s executive office reviews and responds within 24–48 hours.
                            </p>

                            <div className="pt-2 flex flex-wrap items-center gap-3">
                                <a
                                    href={`mailto:${SITE_METADATA.email}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Mail className="w-4 h-4 text-[#CC9F58]" />
                                    <span>{SITE_METADATA.email}</span>
                                </a>
                                <a
                                    href={`tel:${SITE_METADATA.phone.replace(/\s+/g, "")}`}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CDD4DD] bg-white hover:bg-[#FAF7F2] text-[#072954] text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                                >
                                    <Phone className="w-4 h-4 text-[#CC9F58]" />
                                    <span>{SITE_METADATA.phone}</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Inquiry Protocol & SLA Snapshot (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-5 shadow-xs relative overflow-hidden">
                                <div className="flex items-center justify-between border-b border-[#E8EDF4] pb-3">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#072954]">
                                            Inquiry Protocol & SLA
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-[#4A5568]">GMPC-EXEC</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">24–48h</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Guaranteed Executive Office Review Window</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Direct</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Confidential Partner-Level Engagement Assessment</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Global</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Physical Summits & Virtual Studio Delivery</p>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] space-y-1">
                                        <span className="font-serif text-2xl font-bold text-[#072954]">Retainer</span>
                                        <p className="text-[11px] text-[#4A5568] leading-tight">Customized Governance & Board Retainer Models</p>
                                    </div>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-white border border-[#E8EDF4] flex items-center justify-between text-xs">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#072954]">Managing Partner Office</p>
                                        <p className="text-[11px] text-[#4A5568]">Abuja, FCT, Nigeria • Pan-African & Worldwide</p>
                                    </div>
                                    <a
                                        href="#booking-form"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#CC9F58] hover:text-[#072954] transition-colors"
                                    >
                                        <span>Form Below</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Details & Request Form Grid */}
                    <div id="booking-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                        {/* Left Column: Executive Advisory Office Info (5 cols) */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] space-y-6 shadow-xs">
                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl font-bold text-[#072954]">
                                        Executive Advisory Office
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                                        Goldenmuv Premium Consulting Limited (GMPC). All engagements are coordinated through
                                        Dr. Sam&apos;s executive administrative secretariat.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8EDF4]">
                                        <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58] shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] uppercase font-bold tracking-wider text-[#4A5568]">Direct Email</p>
                                            <a
                                                href={`mailto:${SITE_METADATA.email}`}
                                                className="text-xs sm:text-sm font-semibold text-[#072954] hover:text-[#CC9F58] transition-colors break-all"
                                            >
                                                {SITE_METADATA.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8EDF4]">
                                        <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58] shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] uppercase font-bold tracking-wider text-[#4A5568]">Telephone & WhatsApp</p>
                                            <a
                                                href={`tel:${SITE_METADATA.phone.replace(/\s+/g, "")}`}
                                                className="text-xs sm:text-sm font-semibold text-[#072954] hover:text-[#CC9F58] transition-colors"
                                            >
                                                {SITE_METADATA.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8EDF4]">
                                        <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58] shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] uppercase font-bold tracking-wider text-[#4A5568]">Principal Headquarters</p>
                                            <p className="text-xs sm:text-sm font-semibold text-[#072954]">
                                                Goldenmuv Premium Consulting, Abuja, Federal Capital Territory, Nigeria
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E8EDF4]">
                                        <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#CC9F58] shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] uppercase font-bold tracking-wider text-[#4A5568]">Secretariat Operating Hours</p>
                                            <p className="text-xs sm:text-sm font-semibold text-[#072954]">
                                                Monday – Friday: 08:00 – 18:00 (WAT / GMT+1)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white border border-[#E8EDF4] space-y-2 text-xs">
                                    <div className="flex items-center gap-2 font-bold text-[#072954]">
                                        <Building2 className="w-4 h-4 text-[#CC9F58]" />
                                        <span>Firm & Community Platforms</span>
                                    </div>
                                    <div className="flex flex-col gap-1 text-[11px]">
                                        <a
                                            href={SITE_METADATA.firmWebsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#4A5568] hover:text-[#CC9F58] transition-colors"
                                        >
                                            • Consulting Firm: <span className="font-semibold text-[#072954]">{SITE_METADATA.firmWebsite}</span>
                                        </a>
                                        <a
                                            href={SITE_METADATA.becomingCommunityWebsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#4A5568] hover:text-[#CC9F58] transition-colors"
                                        >
                                            • The Becoming Community: <span className="font-semibold text-[#072954]">{SITE_METADATA.becomingCommunityWebsite}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Executive Engagement Request Form (7 cols) */}
                        <div className="lg:col-span-7">
                            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E8EDF4] shadow-xs space-y-6">
                                <div className="space-y-2 border-b border-[#E8EDF4] pb-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                        EXECUTIVE ENGAGEMENT REQUEST FORM
                                    </span>
                                    <h3 className="font-serif text-2xl font-bold text-[#072954]">
                                        Provide Engagement Parameters
                                    </h3>
                                    <p className="text-xs text-[#4A5568] leading-relaxed">
                                        Please furnish our office with key parameters of your organization and planned milestone.
                                    </p>
                                </div>

                                {status === "success" ? (
                                    <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#CC9F58]/50 text-center space-y-4">
                                        <div className="w-12 h-12 rounded-full bg-[#CC9F58]/20 text-[#072954] flex items-center justify-center mx-auto">
                                            <CheckCircle2 className="w-6 h-6 text-[#CC9F58]" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-serif text-xl font-bold text-[#072954]">
                                                Inquiry Received Successfully
                                            </h4>
                                            <p className="text-xs sm:text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                                                Thank you for reaching out. Dr. Immanuelson Sam&apos;s executive office has received
                                                your engagement brief and will respond within 24–48 hours.
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setStatus("idle")}
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#072954] hover:bg-[#041A38] text-white text-xs font-bold uppercase tracking-wider transition-all"
                                        >
                                            <span>Submit Another Inquiry</span>
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {status === "error" && (
                                            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs">
                                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                                                <span>{errorMessage}</span>
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Dr. Aliyu Bello"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                    Organization / Institution *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    name="organization"
                                                    value={formData.organization}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Federal Ministry / Bank Plc"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                    Corporate Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="executive@institution.com"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                    Phone / WhatsApp Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+234 800 000 0000"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                    Engagement Category *
                                                </label>
                                                <select
                                                    name="engagementType"
                                                    value={formData.engagementType}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                                >
                                                    <option value="Keynote Speaking (Physical)">Keynote Speaking (Physical / In-Person)</option>
                                                    <option value="Keynote Speaking (Virtual)">Keynote Speaking (Virtual Webinar)</option>
                                                    <option value="Strategic Advisory & Consulting">Strategic Advisory & Consulting Retainer</option>
                                                    <option value="Executive Board Retreat">Executive Board Retreat Facilitation</option>
                                                    <option value="Corporate Training & Masterclass">Corporate Training & Masterclass</option>
                                                    <option value="1-on-1 Executive Consultation">1-on-1 Executive Consultation</option>
                                                    <option value="The Time Code Bulk Order">The Time Code Book Bulk Order (50+ Copies)</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                    Proposed Milestone Date
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expectedDate"
                                                    value={formData.expectedDate}
                                                    onChange={handleChange}
                                                    placeholder="e.g. November 2026 / Q4 2026"
                                                    className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                Venue City / Physical Location or Virtual Platform
                                            </label>
                                            <input
                                                type="text"
                                                name="locationOrFormat"
                                                value={formData.locationOrFormat}
                                                onChange={handleChange}
                                                placeholder="e.g. Transcorp Hilton Abuja / Lagos / Virtual (Zoom)"
                                                className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#072954]">
                                                Engagement Brief & Strategic Objectives *
                                            </label>
                                            <textarea
                                                required
                                                rows={4}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Please summarize your audience profile, conference theme, expected outcome, or institutional objectives..."
                                                className="w-full px-4 py-3 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] placeholder-[#4A5568]/50 text-xs sm:text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-1 focus:ring-[#CC9F58] transition-all resize-y"
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={status === "submitting"}
                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md disabled:opacity-50 cursor-pointer"
                                            >
                                                {status === "submitting" ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-[#072954] border-t-transparent rounded-full animate-spin" />
                                                        <span>Transmitting Brief...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        <span>Transmit Engagement Request</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}