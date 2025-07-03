import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// SEO metadata
export const metadata: Metadata = {
  title: "Ansh Sharma — Developer, Designer & Creator of Mockew AI",
  description:
    "Ansh Sharma (anshsx/anxh) builds AI tools like Mockew AI to help developers get hired faster, build better resumes, and grow their brand.",
  keywords: [
    "Ansh Sharma",
    "Ansh SX",
    "anshsx",
    "anxh",
    "Ansh Developer",
    "Ansh Mockew AI",
    "AI Resume Builder",
    "Developer Tools",
    "Mockew AI",
    'Fullstack Developer',
    "Build your brand as a developer",
  ],
  metadataBase: new URL("https://yourdomain.com"), // change to your domain
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Ansh Sharma — Developer & Creator of Mockew AI",
    description:
      "Follow Ansh Sharma (anshsx/anxh) and explore AI tools for developers — resume builders, mock interviews, and branding boosters.",
    url: "https://yourdomain.com",
    siteName: "Mockew AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // add real image
        width: 1200,
        height: 630,
        alt: "Mockew AI by Ansh Sharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Sharma — Developer, Designer & Creator of Mockew AI",
    description:
      "Build your developer brand with AI tools by Ansh Sharma (anshsx). Resume builders, mock interviews, and more.",
    creator: "@yourTwitterHandle", // optional
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Ansh Sharma" />
        <meta name="author" content="Ansh Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ansh Sharma",
              alternateName: ["Ansh SX", "anshsx", "anxh", "Ansh Developer"],
              url: "https://yourdomain.com",
              sameAs: [
                "https://github.com/anshsx",
                "https://twitter.com/yourhandle",
                "https://instagram.com/yourhandle",
              ],
              jobTitle: "Developer & Designer",
              worksFor: {
                "@type": "Organization",
                name: "Mockew AI",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <Toaster position="bottom-right" richColors />
        <main>{children}</main>
      </body>
    </html>
  );
}
