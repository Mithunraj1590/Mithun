
const nextFetch = async (slug, ...opt) => {
  const fetchOptions = {
    cache: "no-store",
    ...opt,
  };

  

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}${slug}`,
      fetchOptions

    );

    if (!res.ok) {
      return undefined;
    }

    const data = await res.json(); 
    

    return data;
  } catch (error) {
    return undefined;
  }
};

export default nextFetch;
