import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Use | Dr. Immanuelson Sam",
    description: "Terms of engagement and legal conditions governing the use of this official website.",
};

export default function TermsPage() {
    return (
        <div className="relative min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#CC9F58] selection:text-[#072954]">
            <Navbar />

            <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#072954] hover:text-[#CC9F58] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Homepage</span>
                    </Link>

                    <div className="space-y-3 border-b border-[#E8EDF4] pb-6">
                        <div className="inline-flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#CC9F58]" />
                            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                LEGAL COMPLIANCE
                            </span>
                        </div>
                        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                            Terms of Use
                        </h1>
                        <p className="text-xs text-[#4A5568]">Last Updated: 2026</p>
                    </div>

                    <div className="space-y-6 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                        <section className="space-y-2">
                            <h2 className="font-serif text-base sm:text-lg font-bold text-[#072954]">
                                1. Intellectual Property & Brand Rights
                            </h2>
                            <p>
                                All executive content, published frameworks, media excerpts, keynote outlines, and visual
                                assets displayed across this domain are the intellectual property of Dr. Immanuelson Sam
                                and designated partners. Reproduction or dissemination without formal written authorization is prohibited.
                            </p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="font-serif text-base sm:text-lg font-bold text-[#072954]">
                                2. Advisory & Speaking Inquiries
                            </h2>
                            <p>
                                Transmission of briefs via booking inquiry forms does not establish a formal advisory
                                retainer. Engagements become legally binding only upon bilateral execution of a formal Letter
                                of Engagement or Advisory Agreement.
                            </p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="font-serif text-base sm:text-lg font-bold text-[#072954]">
                                3. Privacy & Corporate Confidentiality
                            </h2>
                            <p>
                                All data transmitted through contact channels is treated under strict executive
                                confidentiality protocols and will never be sold or shared with external third parties.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}