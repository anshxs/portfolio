import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import LenisProvider from "@/components/LenisProvider";

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
  title: "Ansh Sharma — Web & App Dev",
  description:
    "Ansh Sharma (anshsx) ",
  keywords: [
  // Name-based
  "Ansh Sharma",
  "Ansh SX",
  "anshsx",
  "anxh",
  "Ansh Developer",
  "Ansh Sharma Developer",
  "Ansh SX Developer",
  "anshsx developer",
  "anxh developer",
  "Ansh Sharma Portfolio",
  "Ansh Sharma Website",
  "Ansh Sharma Official",
  "Ansh Sharma Coding",
  "Ansh Sharma Programming",
  "Ansh Sharma Projects",
  "Ansh Sharma GitHub",
  "Ansh SX GitHub",
  "anshsx GitHub",
  "Ansh Sharma LinkedIn",
  "Ansh SX LinkedIn",

  // Skills-based
  "Fullstack Developer",
  "Fullstack Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "App Developer",
  "Mobile App Developer",
  "JavaScript Developer",
  "React Developer",
  "Node.js Developer",
  "Next.js Developer",
  "Express.js Developer",
  "MongoDB Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "Software Engineer",
  "UI Developer",
  "UX Developer",
  "UI/UX Designer",
  "API Developer",
  "REST API Developer",
  "GraphQL Developer",
  "Cloud Developer",
  "Database Developer",
  "Responsive Web Developer",
  "Custom Web Developer",
  "E-commerce Developer",
  "Progressive Web App Developer",
  "Cross-platform App Developer",

  // Location-based (adjust location if you want SEO for a specific country)
  "Web Developer India",
  "App Developer India",
  "Fullstack Developer India",
  "Freelance Developer India",
  "Hire Developer India",
  "Top Developer India",
  "Ansh Sharma India",
  "Web Developer Delhi",
  "App Developer Delhi",
  "Fullstack Developer Delhi",
  "Hire Web Developer Delhi",
  "Hire App Developer Delhi",
  "Hire Fullstack Developer Delhi",
  "Remote Developer India",
  "Remote Fullstack Developer",
  "Global Web Developer",
  "International App Developer",

  // Portfolio / Branding
  "Build your brand as a developer",
  "Developer personal brand",
  "Developer portfolio site",
  "Modern developer portfolio",
  "Professional developer profile",
  "Creative web developer portfolio",
  "Best web developer portfolio",
  "Fullstack portfolio projects",
  "Showcase your code",
  "Web development portfolio examples",
  "App development portfolio showcase",
  "Ansh Sharma Portfolio Projects",
  "Ansh Sharma Work Samples",
  "Hire Ansh Sharma",
  "Hire Ansh SX",
  "Hire anshsx",
  "Hire anxh",
  "Work with Ansh Sharma",
  "Freelance with Ansh Sharma",
  "Book Ansh Sharma Developer",
  "Ansh Sharma Services",

  // Long-tail keywords
  "Hire Ansh Sharma Web Developer",
  "Hire Ansh Sharma App Developer",
  "Hire Ansh Sharma Fullstack Developer",
  "Ansh Sharma Web Development Services",
  "Ansh Sharma App Development Services",
  "Ansh Sharma Fullstack Development",
  "Ansh SX Web Developer Portfolio",
  "anshsx app developer projects",
  "anxh fullstack development showcase",
  "Best Web Developer Ansh Sharma",
  "Top App Developer Ansh Sharma",
  "Freelance Fullstack Developer Ansh Sharma",
  "Affordable Web Developer Ansh Sharma",
  "Custom Web Apps by Ansh Sharma",
  "Responsive Websites by Ansh Sharma",
  "Modern App Development by Ansh Sharma",
  "Build a website with Ansh Sharma",
  "Build a mobile app with Ansh Sharma",
  "Scalable web apps Ansh Sharma",
  "Ansh Sharma Developer for Startups",
  "Hire Developer for Business Website Ansh Sharma",
  "Portfolio Website of Ansh Sharma",
  "Ansh Sharma Professional Profile",
  "Fullstack Coding Projects by Ansh Sharma",
  "Web App Development Portfolio Ansh Sharma",
  "Creative Developer Ansh Sharma",
  "Experienced Developer Ansh Sharma",
  "Professional Developer Ansh Sharma",

  // Tech-specific (adds SEO depth)
  "React.js Developer Ansh Sharma",
  "Next.js Developer Ansh Sharma",
  "Node.js Developer Ansh Sharma",
  "MongoDB Developer Ansh Sharma",
  "JavaScript Engineer Ansh Sharma",
  "TypeScript Developer Ansh Sharma",
  "Python Developer Ansh Sharma",
  "Django Developer Ansh Sharma",
  "Flask Developer Ansh Sharma",
  "PHP Developer Ansh Sharma",
  "Laravel Developer Ansh Sharma",
  "WordPress Developer Ansh Sharma",
  "API Integration Developer Ansh Sharma",
  "REST API Engineer Ansh Sharma",
  "GraphQL API Developer Ansh Sharma",
  "Cloud App Developer Ansh Sharma",
  "AWS Developer Ansh Sharma",
  "Google Cloud Developer Ansh Sharma",
  "Azure Developer Ansh Sharma",
  "Docker Developer Ansh Sharma",
  "Kubernetes Developer Ansh Sharma",

  // Extra branding + search intent
  "Who is Ansh Sharma Developer",
  "About Ansh Sharma",
  "Contact Ansh Sharma Developer",
  "Reach Ansh Sharma Web Developer",
  "Connect with Ansh SX",
  "Message anshsx",
  "Meet anxh developer",
  "Follow Ansh Sharma",
  "Follow Ansh SX developer",
  "Hire a freelance developer Ansh Sharma",
  "Trusted Web Developer Ansh Sharma",
  "Skilled App Developer Ansh Sharma",
  "Best Portfolio Websites Ansh Sharma",
  "Learn from Ansh Sharma Developer",
  "Code by Ansh Sharma",
  "Projects by Ansh SX",
  "Coding by anshsx",
  "Apps by anxh",
  "Websites by Ansh Sharma",
  "Tech by Ansh SX",
  "Software by anshsx",
  "Fullstack apps by Ansh Sharma",
  "Web design by Ansh Sharma",
  "UX design by Ansh SX",
  "UI design by anxh",
  "Freelancer Ansh Sharma",
  "Hire coder Ansh Sharma",
  "Hire programmer Ansh Sharma",
  "Fullstack coding by Ansh Sharma",
  "Developer brand Ansh Sharma",
  "Build your brand with Ansh SX",
  "Developer growth Ansh Sharma",
  "Personal brand Ansh Sharma",
  "Ansh SX digital presence",
  "anxh online portfolio"
],
  metadataBase: new URL("https://anshsx.me"), // change to your domain
  alternates: {
    canonical: "https://anshsx.me",
  },
  openGraph: {
    title: "Ansh Sharma — Full Stack Web & App Dev",
    description:
      "Ansh Sharma is a Web & App Developer delivering modern web and mobile apps built for performance and usability",
    url: "https://anshsx.me",
    siteName: "Ansh Sharma",
    type: "website",
    locale: "en_US",
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-image.png", // add real image
    //     width: 1200,
    //     height: 630,
    //     alt: "Mockew AI by Ansh Sharma",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Sharma — Full Stack Web & App Dev",
    description:
      "Ansh Sharma is a Web & App Developer delivering modern web and mobile apps built for performance and usability",
    creator: "@anshsxa", // optional
    // images: ["https://yourdomain.com/og-image.png"],
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
                "https://twitter.com/anshsxa",
                "https://instagram.com/ansh_xs",
              ],
              jobTitle: "Developer & Designer",
              worksFor: {
                "@type": "Organization",
                name: "Self",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <LenisProvider>
          <Toaster position="bottom-right" richColors />
          <main>
            <Header />
            {children}
            <Footer/>
            <FloatingContactButton />
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
