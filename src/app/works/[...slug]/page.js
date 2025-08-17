
import RefineSlug from "@/utilities/RefineSlug";
import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = RefineSlug(params.slug);
  const data = await nextFetch(`work/${slug}`);
  return {
    title: data?.data?.seo?.metaTitle,
    description: data?.data?.seo?.metaDescription,
    openGraph: {
      images: data?.data?.seo?.metaImage?.url,
    },
  };
}

const WorkDetailPage = async ({ params, searchParams }) => {
  const options = {};
  const slug = RefineSlug(params.slug);
  const data = await nextFetch(`api/work/${slug}`, options);
  console.log(data.data.widgets,"aaa");

  if (!data) {
    notFound();
  }
  return (
    <main>
      <WidgetBlocks widgets={data?.data?.widgets} />
    </main>
  );
};

export default WorkDetailPage;
