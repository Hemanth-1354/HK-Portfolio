import "./globals.css";
import "./theme.css";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
// ✅ Explicitly specify available weights
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Hemanth Kumar Polisetti - Developer & Tech Enthusiast",
  description:
    "Hemanth Kumar Polisetti is a passionate web developer and tech enthusiast specializing in modern web technologies. Explore my portfolio and projects here!",
  keywords: "Hemanth Kumar Polisetti, Full stack web developer, Python, Django, REST, FastAPI",
  icons: {
    icon: [
      { url: "/favicon/me1.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/me1.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon/me1.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/me1.png", // iOS Safari
  },
  manifest: "/favicon/site.webmanifest", // Web app manifest
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <meta name="google-adsense-account" content="ca-pub-6603452020198848" />         */}
      {/* Google Analytics gtag.js */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-65K2CPE602`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-65K2CPE602');
          `}
        </Script>
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6603452020198848"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={`${jakarta.variable} `}>{children}</body>
    </html>
  );
}
