import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { CookieConsent } from "@/components/legal/cookie-consent";

import "./globals.css";
import "./centered-marketing.css";
import "./minimal-scale.css";
import "./minimal-header.css";
import "./legal.css";
import "./premium-system.css";

const geistBody = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistDisplay = Geist({
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
    "TeleDoctorSA provides connected clinical technology for virtual care, ECG247 monitoring, electronic health records and remote patient workflows in South Africa.",
  applicationName: "TeleDoctorSA",
  category: "Digital Health",
  keywords: [
    "TeleDoctorSA",
    "telemedicine South Africa",
    "virtual healthcare South Africa",
    "ECG247",
    "remote patient monitoring",
    "electronic health records",
    "digital health South Africa",
    "medical practice technology",
    "connected care",
  ],
  authors: [{ name: "TeleDoctorSA" }],
  creator: "TeleDoctorSA",
  publisher: "TeleDoctorSA",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.teledoctorsa.co.za",
    siteName: "TeleDoctorSA",
    title: "TeleDoctorSA | Connected Care Technology",
    description:
      "Connected clinical technology for virtual care, ECG247 monitoring, health records and remote patient workflows in South Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleDoctorSA | Connected Care Technology",
    description:
      "Connected clinical technology for virtual care, ECG247 monitoring, health records and remote patient workflows in South Africa.",
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TeleDoctorSA",
  url: "https://www.teledoctorsa.co.za",
  logo: "https://www.teledoctorsa.co.za/images/home/logo.png",
  email: "info@teledoctorsa.co.za",
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-78-033-6394",
    contactType: "customer support",
    areaServed: "ZA",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TeleDoctorSA",
  url: "https://www.teledoctorsa.co.za",
  inLanguage: "en-ZA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${geistBody.variable} ${geistDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
