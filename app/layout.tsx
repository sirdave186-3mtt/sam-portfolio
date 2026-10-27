import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Immanuelson Sam | Global Speaker & Management Consultant",
  description:
    "Official website of Dr. Immanuelson Sam. Managing Partner at Goldenmuv Premium Consulting, author of Time Code, and leadership coach.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-white text-slate-800 antialiased selection:bg-[#CC9F58] selection:text-[#072954]">
        {children}
      </body>
    </html>
  );
}