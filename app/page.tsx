import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MandateSection from "@/components/sections/MandateSection";
import LiterarySection from "@/components/sections/LiterarySection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import BecomingSection from "@/components/sections/BecomingSection";
import RateCardSection from "@/components/sections/RateCardSection";
import BookingSection from "@/components/sections/BookingSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-slate-100 flex flex-col selection:bg-brand-gold selection:text-black">
      {/* Fixed Navigation Bar with Active Route Smooth Scrolling */}
      <Navbar />

      {/* Main Narrative Flow */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero: Positioning, Credentials, Dual CTAs */}
        <HeroSection />

        {/* 2. The Mandate & Bio: Story, Governance & Philosophy */}
        <MandateSection />

        {/* 3. Literary Showcase: "Time Code" Book Spotlight */}
        <LiterarySection />

        {/* 4. Speaking & Masterclasses: Keynote Frameworks & Stage Visuals */}
        <SpeakingSection />

        {/* 5. The Becoming Ecosystem: Community Mentorship Portal */}
        <BecomingSection />

        {/* 6. Transparent Investment & Rate Card (Pre-Qualifies Inquiries) */}
        <RateCardSection />

        {/* 7. Executive Bookings & Direct Inquiry Form (Resend Routing) */}
        <BookingSection />
      </main>

      {/* Corporate Presence & Regional Offices Footer */}
      <Footer />
    </div>
  );
}