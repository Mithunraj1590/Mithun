import ComponentFunc from "../src/components";
const db = require("./../db.json");

const Slug = (props) => {
  return (
    <div>
      {props && (
        <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    let route = params.slug.join("/");
    const pageContent = db[route];

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

export default Slug;
