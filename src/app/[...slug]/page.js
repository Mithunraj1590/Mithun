
import RefineSlug from "@/utilities/RefineSlug";
import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = RefineSlug(params.slug);
  const data = await nextFetch(`api/general/${slug}`);
  return {
    title: data?.data?.seo?.metaTitle,
    description: data?.data?.seo?.metaDescription,
    openGraph: {
      images: data?.data?.seo?.metaImage?.url?.url,
    },
  };
}

const CommonPage = async ({ params, searchParams }) => {
  const options = {};
  const slug = RefineSlug(params.slug);
  const data = await nextFetch(`api/general/${slug}`, options);
  console.log(data,"wwwwwwwwwwwwwwwwwwwww");
  if (!data) {
    notFound();
  }
  return (
    <main>
      <WidgetBlocks widgets={data?.data?.widgets} />
    </main>
  );
};

export default CommonPage;
