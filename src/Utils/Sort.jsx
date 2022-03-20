export const sortProduct = (products, sortBy) => {

  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort(
      (a, b) => (a.price) - (b.price)
    );
  else if (sortBy === "HIGH_TO_LOW")
    return [...products].sort(
      (a, b) => (b.price) - (a.price)
    );
  else if (sortBy === "NAMEA-Z")
    return [...products].sort((a, b) => {
      if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
      return 0;
    });
  else if (sortBy === "NAMEZ-A")
    return [...products].sort((a, b) => {
      if (a.title.toUpperCase() > b.title.toUpperCase()) return -1;
      return 0;
    });
  else if (sortBy === "RATING")
    return [...products].sort((a, b) => {
      if ((a.rating) > (b.rating)) return -1;
      return 1;
    });
  return products;
};
