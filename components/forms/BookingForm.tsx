"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Calendar } from "lucide-react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        serviceCategory: "Keynote Speaking (Physical)",
        targetDate: "",
        locationAndAudience: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to process booking inquiry. Please try again or email directly.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error connecting to booking services. Please email directly.");
        }
    };

    if (status === "success") {
        return (
            <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-8 sm:p-12 text-center space-y-5 shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-[#CC9F58]/15 border border-[#CC9F58]/40 flex items-center justify-center text-[#072954] mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-[#CC9F58]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072954]">
                    Inquiry Successfully Dispatched
                </h3>
                <p className="text-sm sm:text-base text-[#4A5568] max-w-lg mx-auto leading-relaxed">
                    Thank you for reaching out to Dr. Immanuelson Sam&apos;s executive advisory office.
                    A confirmation receipt has been sent to your email, and our team will be in touch within 24–48 hours.
                </p>
                <button
                    onClick={() => {
                        setStatus("idle");
                        setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            organization: "",
                            serviceCategory: "Keynote Speaking (Physical)",
                            targetDate: "",
                            locationAndAudience: "",
                            message: "",
                        });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-[#CDD4DD] bg-white text-[#072954] text-xs font-bold uppercase tracking-wider hover:bg-[#FAF7F2] transition-colors"
                >
                    Submit Another Request
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-6 sm:p-10 shadow-xs space-y-6"
        >
            <div className="space-y-1.5 border-b border-[#E8EDF4] pb-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#072954]">
                    <Calendar className="w-4 h-4 text-[#CC9F58]" />
                    <span>Executive Engagement Request Form</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5568]">
                    Please furnish our office with key parameters of your organization and planned milestone.
                </p>
            </div>

            {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-xs sm:text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                </div>
            )}

            {/* Row 1: Full Name & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                        Full Name <span className="text-[#CC9F58]">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Dr. Folasade Adeleke"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                    />
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="organization" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                        Organization / Institution <span className="text-[#CC9F58]">*</span>
                    </label>
                    <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g., Bank of Agriculture / Federal Ministry"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                    />
                </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                        Official Email Address <span className="text-[#CC9F58]">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="f.adeleke@institution.org"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                    />
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                        Telephone / WhatsApp <span className="text-[#CC9F58]">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                    />
                </div>
            </div>

            {/* Row 3: Category & Target Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label htmlFor="serviceCategory" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                        Practice Area / Engagement Type <span className="text-[#CC9F58]">*</span>
                    </label>
                    <select
                        id="serviceCategory"
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                    >
                        <option value="Keynote Speaking (Physical)">Keynote Speaking (Physical / On-Site)</option>
                        <option value="Keynote Speaking (Virtual)">Keynote Speaking (Virtual Webinar)</option>
                        <option value="Strategic Advisory & Consulting">Strategic Advisory & Management Consulting</option>
                        <option value="Leadership Development & Training">Leadership Training & Culture Transformation</option>
                        <option value="1-on-1 Executive Consultation">1-on-1 Executive Leadership Consultation</option>
                        <option value="Corporate Book Bulk Order">Corporate Book Bulk Order ("The Time Code")</option>
                        <option value="Board Retainer & Other">Board Retainer / Long-Term Governance</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="targetDate" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                        Proposed Date or Timeline
                    </label>
                    <input
                        type="text"
                        id="targetDate"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleChange}
                        placeholder="e.g., November 2026 / Q4 Summit"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                    />
                </div>
            </div>

            {/* Row 4: Audience Size & Location */}
            <div className="space-y-1.5">
                <label htmlFor="locationAndAudience" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                    Location & Expected Audience Profile
                </label>
                <input
                    type="text"
                    id="locationAndAudience"
                    name="locationAndAudience"
                    value={formData.locationAndAudience}
                    onChange={handleChange}
                    placeholder="e.g., Transcorp Hilton Abuja / 250 Senior Executives"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs"
                />
            </div>

            {/* Row 5: Message / Scope */}
            <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#072954]">
                    Scope of Engagement & Objectives <span className="text-[#CC9F58]">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your organization's primary goals, key theme, and expected deliverables for Dr. Sam..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#CDD4DD] text-[#072954] placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#CC9F58] focus:ring-2 focus:ring-[#CC9F58]/20 transition-all shadow-xs resize-none"
                />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-[#CC9F58] hover:bg-[#b88c49] disabled:bg-slate-300 text-[#072954] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin text-[#072954]" />
                            <span>Transmitting Inquiry...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 text-[#072954]" />
                            <span>Transmit Executive Inquiry</span>
                        </>
                    )}
                </button>
            </div>

            <p className="text-[11px] text-[#4A5568] text-center leading-relaxed">
                Your information is treated with strict corporate confidentiality and is never shared with third parties.
            </p>
        </form>
    );
}