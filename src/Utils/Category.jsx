export const categoryFilter = (products, categoryFilter) => {
  const { fiction, nonFiction, selfHelp, romance,horror } = categoryFilter;


  if (!fiction && !nonFiction && !selfHelp &&!romance && !horror) return products; //if no category selected
  let FictionFiltered = [],
    NonFictionFiltered = [],
    SelfHelpFiltered = [],
    RomanceFiltered=[],
    HorrorFiltered=[];


  if (fiction) {
    FictionFiltered = products.filter((item) => item.categoryName === "fiction");
  }
  if (nonFiction) {
    NonFictionFiltered = products.filter(
      (item) => item.categoryName === "non-fiction"
    );
  }
  if (selfHelp) {
    SelfHelpFiltered = products.filter((item) => item.categoryName === "Self Help");
  }
  if (romance) {
    RomanceFiltered = products.filter((item) => item.categoryName === "romance");
  }
  if (horror) {
    HorrorFiltered = products.filter((item) => item.categoryName === "horror");
  }

  return [...FictionFiltered,...NonFictionFiltered,...SelfHelpFiltered,...RomanceFiltered,...HorrorFiltered];
};
