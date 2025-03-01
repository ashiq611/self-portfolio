import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ashiqur-rahman-swe.vercel.app/"),
  title: "Md. Ashiqur Rahman - SWE | SQA | Cyber Security - Developer Portfolio",
  description:
    "Developer Portfolio of Full Stack Developer from Bangladesh with 1+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Ashiqur Rahman",
    "Ashiqur",
    "Ashiq",
    "Md. Ashiqur Rahman",
    "Ashiqur_Rahman",
    "Frontend",
    "Next.js",
    "ReactNative",
    "Android",
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "AWS",
    "Google Cloud",
    "Tailwind CSS",
    "CSS",
    "HTML",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "NPM",
    "Yarn",
    "Vercel",
    "Netlify",
    "Firebase",
    "Next.js",
    "React",
    "React Native",
    "React Three Fiber",
    "Three.js",
    "Blender",
  ],
  openGraph: {
    title: "Md. Ashiqur Rahman - SWE | IXD | UX",
    description:
      "Developer Portfolio of Full Stack Developer from Bangladesh with 1+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://ashiqur-rahman-swe.vercel.app/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Md. Ashiqur Rahman",
              jobTitle: "Software Engineer",
              url: "https://ashiqur-rahman-swe.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/mdashiqurrahman1102/",
                "https://github.com/ashiq611",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
