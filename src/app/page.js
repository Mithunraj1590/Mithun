import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";
export async function generateMetadata({ params }) {
  const data = await nextFetch(`api/general/homepage`);
  return {
    title: data?.data?.seo?.metaTitle,
    description: data?.data?.seo?.metaDescription,
    openGraph: {
      images: data?.data?.seo?.metaImage?.url?.url,
    },
  };
}

const HomePage = async() => {
  const data = await nextFetch("api/general/homepage"); 
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
