import WidgetBlocks from "@/utilities/WidgetBlock";
import nextFetch from "@/utilities/nextFetch";


const HomePage = async() => {
  const data = await nextFetch('/data/homepage');  
  
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
