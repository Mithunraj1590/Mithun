import ComponentFunc from "../src/components"
import { getPageContent } from "../lib/pages";

const Slug = (props) => {
  return (
   <div>
     {props && (
          <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>
      )}
   </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["detailpage"] } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({params}) {
    try {
      let route = params.slug.join("/");
      const pageContent = await getPageContent(route);
      console.log(pageContent, "page data")
      return {
        props: {
          data: pageContent,
        },
        revalidate: 300,
      };
    } catch (error) {
      return {
        props: {
          apiError: true,
        },
      };
    }
  }

export default Slug