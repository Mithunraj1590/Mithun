import GlobalProviders from "@/components/GlobalProviders";
import ScrollToTop from "@/components/ScrollToTop";
// import CommonLayout from "@/src/layout/commonLayout";
import CommonLayout from "@/layout/commonLayout";
import "@/styles/main.scss";
import { Inter,JetBrains_Mono,Bai_Jamjuree } from "next/font/google";

const inter = Inter({ subsets: ["latin"],
  variable:"--font-primary"
 });
const jet_brain = JetBrains_Mono({ subsets: ["latin"],
  variable:"--font-secondary"
 });

 const bai_jamjuree = Bai_Jamjuree({ subsets: ["latin"],
  variable:"--font-third",
  weight: ["200", "300", "400", "500", "600", "700"]
 });

export const metadata = {
  title: 'Mithun Raj - Frontend Developer',
  description: 'Portfolio of Mithun Raj, a Frontend Developer specializing in React, Next.js, and modern web technologies.',
  manifest: '/manifest.webmanifest',
  themeColor: '#000000',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jet_brain.variable} ${bai_jamjuree.variable}`} suppressHydrationWarning={true}>
        <GlobalProviders>
          <CommonLayout>{children}</CommonLayout>
          <ScrollToTop />
        </GlobalProviders>
      </body>
    </html>
  );
}
