import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, CheckCircle2, Award } from "lucide-react";

export default function BookSpotlight() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E8EDF4]">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-3xl bg-[#FAF7F2] border border-[#E8EDF4] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Left Column: Real 3D Book Presentation */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#CC9F58]/30 bg-[#072954] group">
                            <Image
                                src="/images/time-code-book.jpg"
                                alt="The Time Code by Dr. Immanuelson Sam - Foreword by Dr. Linus Okorie MFR"
                                fill
                                priority
                                sizes="(max-width: 640px) 100vw, 420px"
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column: Narrative & Order CTAs */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#CC9F58]">
                                PUBLISHED WORK & PRODUCTIVITY BLUEPRINT
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072954]">
                                The Time Code: <span className="italic text-[#CC9F58]">How Every Moment Shapes Your Future</span>
                            </h2>
                            <div className="flex items-center gap-2 text-xs font-semibold text-[#072954]">
                                <Award className="w-4 h-4 text-[#CC9F58]" />
                                <span>Foreword by Dr. Linus Okorie MFR</span>
                            </div>
                        </div>

                        <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed">
                            In an era of relentless distraction and institutional demands, <em>The Time Code</em> provides
                            a battle-tested operating system for executives, founders, and professionals to command their
                            time, eliminate productivity leaks, and build extraordinary lives.
                        </p>

                        <div className="space-y-2.5 text-xs sm:text-sm text-[#072954] font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <span>Executive time and energy management architectures</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <span>Purpose-driven execution systems under macroeconomic pressure</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#CC9F58] shrink-0" />
                                <span>Eliminating organizational friction and cognitive burnout</span>
                            </div>
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-4">
                            <Link
                                href="/books"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#072954] hover:bg-[#041A38] text-white font-semibold text-xs uppercase tracking-wider transition-all"
                            >
                                <BookOpen className="w-4 h-4 text-[#CC9F58]" />
                                <span>Explore Book Chapters</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#CC9F58] hover:bg-[#b88c49] text-[#072954] font-bold text-xs uppercase tracking-wider transition-all"
                            >
                                <span>Order Copies for Your Team</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}