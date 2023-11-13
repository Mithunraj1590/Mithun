import ComponentFunc from "../src/components";
const db = require("./../db.json");
const HomePage = (props) => {
  return (
    <div>
      {props && (
        <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>
      )}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const pageContent = db["home"];
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
export default HomePage;
