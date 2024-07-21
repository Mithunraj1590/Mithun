const RefineSlug = (slug) => {
    let combinedString;
    if (slug.length === 0) {
      return null;
    } else {
      combinedString = slug.join("/");
    }
    return combinedString;
  };
  
  export default RefineSlug;
