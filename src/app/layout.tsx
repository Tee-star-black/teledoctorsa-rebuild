import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://teledoctorsa.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TeleDoctorSA | Connected Healthcare Technology South Africa",
    template: "%s | TeleDoctorSA",
  },
  description:
    "TeleDoctorSA connects virtual care, ECG247 remote monitoring and secure digital health records to help healthcare professionals deliver continuous patient care.",
  applicationName: "TeleDoctorSA",
  keywords: [
    "TeleDoctorSA",
    "telemedicine South Africa",
    "connected healthcare South Africa",
    "digital health South Africa",
    "remote patient monitoring",
    "ECG247",
    "remote ECG monitoring",
    "virtual healthcare",
    "electronic health records",
    "healthcare technology",
    "doctor telemedicine platform",
    "Johannesburg healthcare technology",
  ],
  authors: [{ name: "TeleDoctorSA", url: siteUrl }],
  creator: "TeleDoctorSA",
  publisher: "TeleDoctorSA",
  category: "Healthcare Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "TeleDoctorSA",
    title: "TeleDoctorSA | Connected Healthcare Technology South Africa",
    description:
      "Connected healthcare technology combining virtual care, ECG247 remote monitoring and secure digital health records for continuous patient care.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TeleDoctorSA connected healthcare technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleDoctorSA | Connected Healthcare Technology",
    description:
      "Virtual care, ECG247 remote monitoring and connected digital health records for healthcare professionals and patients in South Africa.",
    images: ["/opengraph-image"],
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Johannesburg",
    "content-language": "en-ZA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#200d1e",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "TeleDoctorSA",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Connected healthcare technology combining virtual care, remote monitoring and secure digital health records.",
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "29 Landor Street, Tulisa Park",
    addressLocality: "Johannesburg",
    postalCode: "2197",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-78-033-6394",
    email: "info@teledoctorsa.co.za",
    contactType: "customer support",
    areaServed: "ZA",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "TeleDoctorSA",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-ZA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </body>
    </html>
  );
}
