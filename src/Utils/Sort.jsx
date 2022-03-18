export const sortProduct = (products, sortBy) => {

  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
  else if (sortBy === "HIGH_TO_LOW")
    return [...products].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
  else if (sortBy === "NAMEA-Z")
    return [...products].sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      return 0;
    });
  else if (sortBy === "NAMEZ-A")
    return [...products].sort((a, b) => {
      if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
      return 0;
    });
  else if (sortBy === "RATING")
    return [...products].sort((a, b) => {
      if (parseFloat(a.rating) > parseFloat(b.rating)) return -1;
      return 1;
    });
  return products;
};
