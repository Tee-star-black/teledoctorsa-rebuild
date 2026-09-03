import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { CookieConsent } from "@/components/legal/cookie-consent";

import "./globals.css";
import "./centered-marketing.css";
import "./minimal-scale.css";
import "./minimal-header.css";
import "./legal.css";
import "./premium-system.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teledoctorsa.co.za"),
  title: {
    default: "TeleDoctorSA | Connected Care Technology",
    template: "%s | TeleDoctorSA",
  },
  description:
    "TeleDoctorSA provides connected-care technology and configurable digital health solutions for healthcare practices.",
  applicationName: "TeleDoctorSA",
  category: "Digital Health",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "TeleDoctorSA",
    title: "TeleDoctorSA | Connected Care Technology",
    description:
      "Connected clinical technology for virtual care, ECG247 monitoring, health records and remote patient workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleDoctorSA | Connected Care Technology",
    description:
      "Connected clinical technology for virtual care, ECG247 monitoring, health records and remote patient workflows.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
