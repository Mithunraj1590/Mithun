import GlobalProviders from "@/components/GlobalProviders";
import ScrollToTop from "@/components/ScrollToTop";
// import CommonLayout from "@/src/layout/commonLayout";
import CommonLayout from "@/layout/commonLayout";
import "@/styles/main.scss";
import { Inter,JetBrains_Mono,Bai_Jamjuree } from "next/font/google";
import Head from 'next/head'

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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className={`${inter.variable} ${jet_brain.variable} ${bai_jamjuree.variable}`} suppressHydrationWarning={true}>
        <GlobalProviders>
          <CommonLayout>{children}</CommonLayout>
          <ScrollToTop />
        </GlobalProviders>
      </body>
    </html>
  );
}
