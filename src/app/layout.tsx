import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teledoctorsa.co.za"),
  title: {
    default: "TeleDoctorSA | Connected Healthcare Technology",
    template: "%s | TeleDoctorSA",
  },
  description:
    "TeleDoctorSA connects virtual care, ECG247, remote monitoring and longitudinal patient information for healthcare professionals in South Africa.",
  applicationName: "TeleDoctorSA",
  keywords: [
    "telemedicine South Africa",
    "remote patient monitoring",
    "ECG247",
    "virtual care",
    "digital health South Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "TeleDoctorSA",
    title: "TeleDoctorSA | Connected Healthcare Technology",
    description:
      "Connected virtual care, ECG247 and remote monitoring for healthcare professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeleDoctorSA | Connected Healthcare Technology",
    description:
      "Connected virtual care, ECG247 and remote monitoring for healthcare professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
