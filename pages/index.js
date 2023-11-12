import ComponentFunc from "../src/components"
import { getPageContent } from "../lib/pages";

const HomePage = (props) => {
  return (
   <div>
     {props && (
          <>{props?.data?.widgets?.map((block) => ComponentFunc(block))}</>
      )}
   </div>
  )
}

export async function getStaticProps() {
  try {
    
    const pageContent = await getPageContent("home");
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


// export async function getStaticProps() {
//     try {
//       const pageContent = data
//       return {
//         props: { 
//           data: pageContent,
//         },
//         revalidate: 300,
//       };
//     } catch (error) {
//       return {
//         props: {
//           apiError: true,
//         },
//       };
//     }
//   }

export default HomePage