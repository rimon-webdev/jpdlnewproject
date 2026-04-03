import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jpdlbd.com"),

  title: {
    default: "JPDL Real Estate Bangladesh | Buy Land & Apartments in Dhaka",
    template: "%s | JPDL Real Estate",
  },

  description:
    "JPDL is a trusted real estate company in Bangladesh offering premium apartments, land sharing, and commercial properties in Dhaka including Bashundhara, Gulshan, and Uttara.",

  keywords: [
    "JPDL",
    "JPDL Bangladesh",
    "Real Estate Bangladesh",
    "Dhaka Apartments",
    "Land for Sale Dhaka",
    "Bashundhara Property",
    "Gulshan Real Estate",
    "Uttara Flats",
    "Commercial Property Dhaka",
  ],

  authors: [{ name: "JPDL Real Estate" }],
  creator: "JPDL",
  publisher: "JPDL",

  openGraph: {
    title: "JPDL Real Estate Bangladesh",
    description:
      "Premium real estate company in Bangladesh. Buy apartments, land & commercial properties in Dhaka.",
    url: "https://jpdlbd.com",
    siteName: "JPDL",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JPDL Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JPDL Real Estate Bangladesh",
    description:
      "Buy premium apartments, land & commercial properties in Dhaka with JPDL.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}