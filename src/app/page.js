import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";

export async function generateMetadata() {
  const data = await nextFetch('api/homepage');

  
  
  if (!data?.data?.seo) {
    return {
      title: 'Mithun Raj - Frontend Developer',
      description: 'Portfolio of Mithun Raj, a Frontend Developer specializing in React, Next.js, and modern web technologies.',
    };
  }

  const seo = data.data.seo;
  
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    authors: [{ name: seo.metaAuthor }],
    creator: seo.metaAuthor,
    publisher: seo.metaAuthor,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seo.metaUrl),
    alternates: {
      canonical: seo.metaUrl,
    },
    openGraph: {
      title: seo.openGraphTitle,
      description: seo.openGraphDescription,
      url: seo.openGraphUrl,
      siteName: seo.openGraphSiteName,
      images: seo.openGraphImage ? [
        {
          url: seo.openGraphImage,
          width: 1200,
          height: 630,
          alt: seo.metaImage?.alt,
        }
      ] : seo.metaImage?.url ? [
        {
          url: seo.metaImage.url,
          width: 1200,
          height: 630,
          alt: seo.metaImage.alt,
        }
      ] : ['/icon-512x512.png'],
      locale: seo.metaLanguage,
      type: seo.openGraphType,
    },
    twitter: {
      card: seo.twitterCard,
      title: seo.metaTitle,
      description: seo.metaDescription,
      site: seo.twitterSite,
      creator: seo.twitterCreator,
      images: seo.openGraphImage ? [seo.openGraphImage] : seo.metaImage?.url ? [seo.metaImage.url] : ['/icon-512x512.png'],
    },
    robots: {
      index: seo.metaRobots?.includes('index') !== false,
      follow: seo.metaRobots?.includes('follow') !== false,
      googleBot: {
        index: seo.metaRobots?.includes('index') !== false,
        follow: seo.metaRobots?.includes('follow') !== false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    themeColor: seo.metaThemeColor,
    charset: seo.metaCharset,
    language: seo.metaLanguage,
  };
}

export async function generateViewport() {
  const data = await nextFetch('api/homepage');
  
  if (!data?.data?.seo) {
    return {
      width: 'device-width',
      initialScale: 1,
    };
  }

  const seo = data.data.seo;
  
  return {
    width: seo.metaViewport?.includes('width=device-width') ? 'device-width' : 'width',
    initialScale: seo.metaViewport?.includes('initial-scale=1.0') ? 1 : 1,
  };
}

const HomePage = async() => {
  const data = await nextFetch('api/homepage');  
  
  return (
    <>
     <main className="isHome">
      {data && (
          <WidgetBlocks widgets={data?.data?.widgets}></WidgetBlocks>
      )}
    </main>
    </>
  );
};

export default HomePage;
