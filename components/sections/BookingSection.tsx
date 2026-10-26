import BookingForm from "@/components/forms/BookingForm";
import { Mail, Phone, MapPin, Globe, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_METADATA } from "@/lib/constants";

export default function BookingSection() {
    return (
        <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Section Header */}
                <div className="max-w-3xl space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                        <span className="w-6 h-[1px] bg-brand-gold" />
                        Executive Inquiries & Bookings[cite: 17]
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Engage Dr. Immanuelson Sam <br />
                        <span className="text-brand-gold italic">for Your Next Milestone</span>[cite: 17]
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                        Whether booking an inspiring physical keynote, virtual executive masterclass, or strategic
                        advisory consultation, partner with Dr. Sam to turn institutional uncertainty into measurable triumphs[cite: 2, 7, 8, 17].
                    </p>
                </div>

                {/* Form & Direct Contact Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Direct Info & Booking Terms */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-5">
                            <h3 className="font-serif text-xl font-bold text-white">
                                Direct Contact & Advisory Office[cite: 1, 4]
                            </h3>

                            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                                <a
                                    href={`mailto:${SITE_METADATA.email}`}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-card hover:border-brand-gold-border border border-transparent transition-all"
                                >
                                    <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Direct Email[cite: 1, 17]</p>
                                        <p className="font-medium text-white">{SITE_METADATA.email}[cite: 1, 17]</p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${SITE_METADATA.phone}`}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-brand-card hover:border-brand-gold-border border border-transparent transition-all"
                                >
                                    <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Telephone / WhatsApp[cite: 1, 17]</p>
                                        <p className="font-medium text-white">{SITE_METADATA.phone}[cite: 1, 17]</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-card border border-transparent">
                                    <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-slate-400">Corporate Headquarters[cite: 4]</p>
                                        <p className="text-white">Suite 301B DBM Plaza, Aminu Kano Crescent, Wuse 2, Abuja, Nigeria[cite: 4]</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Engagement Terms Box */}
                        <div className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border space-y-4">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Booking & Logistics Protocol[cite: 7]</span>
                            </div>
                            <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed list-disc list-inside">
                                <li>Engagements are customizable based on audience size, scope, location, and institutional depth[cite: 7].</li>
                                <li>Rates exclude travel, logistics, accommodation, and statutory VAT unless bundled into corporate retainers[cite: 7].</li>
                                <li>Virtual webinar sessions feature high-energy interactive tools tailored for global/remote executive teams[cite: 7].</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="lg:col-span-7">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </section>
    );
}