"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingInput } from "@/lib/validation";
import { ENGAGEMENT_TYPES } from "@/lib/constants";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function BookingForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<BookingInput>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            engagementType: "keynote_physical",
        },
    });

    const onSubmit = async (data: BookingInput) => {
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || "Failed to submit inquiry. Please try again.");
            }

            setStatus("success");
            reset();
        } catch (err: unknown) {
            setStatus("error");
            setErrorMessage(
                err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
            );
        }
    };

    return (
        <div className="bg-brand-surface rounded-3xl border border-brand-border p-6 sm:p-10 shadow-2xl relative">
            {status === "success" ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto border border-brand-gold-border">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Dr. Immanuelson Sam&apos;s executive office will review your event
                        details and respond within 24 to 48 business hours[cite: 17].
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 px-6 py-2.5 rounded-lg border border-brand-border text-xs uppercase tracking-wider text-slate-300 hover:text-white hover:border-brand-gold-border transition-colors"
                    >
                        Submit Another Inquiry
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {status === "error" && (
                        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-center gap-3">
                            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                                Full Name *
                            </label>
                            <input
                                {...register("fullName")}
                                type="text"
                                placeholder="e.g. Aliko Mohammed"
                                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-600"
                            />
                            {errors.fullName && (
                                <p className="text-[11px] text-red-400">{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                                Corporate / Work Email *
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="name@organization.com"
                                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-600"
                            />
                            {errors.email && (
                                <p className="text-[11px] text-red-400">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Organization */}
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                                Organization / Institution *
                            </label>
                            <input
                                {...register("organization")}
                                type="text"
                                placeholder="e.g. Central Bank, State Ministry, or Firm"
                                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-600"
                            />
                            {errors.organization && (
                                <p className="text-[11px] text-red-400">{errors.organization.message}</p>
                            )}
                        </div>

                        {/* Engagement Type */}
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                                Engagement Type *[cite: 7, 8, 9]
                            </label>
                            <select
                                {...register("engagementType")}
                                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors"
                            >
                                {ENGAGEMENT_TYPES.map((type) => (
                                    <option key={type.value} value={type.value} className="bg-brand-surface text-white">
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                            {errors.engagementType && (
                                <p className="text-[11px] text-red-400">{errors.engagementType.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Preferred Date */}
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                                Proposed Event Date / Timeline *
                            </label>
                            <input
                                {...register("eventDate")}
                                type="text"
                                placeholder="e.g. November 18, 2026 or Q4 2026"
                                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-600"
                            />
                            {errors.eventDate && (
                                <p className="text-[11px] text-red-400">{errors.eventDate.message}</p>
                            )}
                        </div>

                        {/* Event Location / Format */}
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                                Location (City / Country or Virtual) *
                            </label>
                            <input
                                {...register("location")}
                                type="text"
                                placeholder="e.g. Abuja, Lagos, Nairobi, or Zoom"
                                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-600"
                            />
                            {errors.location && (
                                <p className="text-[11px] text-red-400">{errors.location.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Context & Scope */}
                    <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                            Event Context & Desired Outcomes *
                        </label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            placeholder="Tell us about your audience size, executive level, key challenges to address, and expected deliverables[cite: 7]..."
                            className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-white text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-600 resize-none"
                        />
                        {errors.message && (
                            <p className="text-[11px] text-red-400">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit CTA */}
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-black font-semibold text-sm transition-all duration-200 shadow-gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Transmitting Inquiry to Dr. Sam&apos;s Team[cite: 17]...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                <span>Submit Speaking / Booking Inquiry[cite: 17]</span>
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}