//for google font 
import { Red_Hat_Display, Zilla_Slab } from '@next/font/google'
//for local font 
// import localFont from '@next/font/local'
import CommonLayout from "../src/components/Layout/CommonLayout";
import "../src/styles/common.scss";
const fontPrimary = Red_Hat_Display({
  weight: ['300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: "swap"
})
const fontSecondary = Zilla_Slab({
  weight: ['300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: "swap"
})

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <style jsx global>{`
        html,body {
          font-family: ${fontPrimary.style.fontFamily};
          --bs-body-font-family: ${fontPrimary.style.fontFamily};
          --bs-second-font-family: ${fontSecondary.style.fontFamily};
        }
      `}</style>
      <CommonLayout >
        <Component {...pageProps} />
      </CommonLayout>
    </>
  );
}

export default MyApp;
