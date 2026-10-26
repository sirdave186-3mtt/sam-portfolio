import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Immanuelson Sam | Management Consultant, Leadership Coach & Global Speaker",
  description:
    "Official portfolio of Dr. Immanuelson Sam. Author of 'Sacred Solitude', YALI Fellow, Managing Partner at GMPC, empowering Africa's future through strategic leadership and culture transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-slate-100 font-sans antialiased selection:bg-brand-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}