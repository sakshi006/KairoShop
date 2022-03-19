export const categoryFilter = (products, categoryFilter) => {
  const { Fiction, NonFiction, SelfHelp } = categoryFilter;

  if (!Fiction && !NonFiction && !SelfHelp) return products; //if no category selected
  let FictionFiltered = [],
    NonFictionFiltered = [],
    SelfHelpFiltered = [];

  if (Fiction) {
    FictionFiltered = products.filter((item) => item.category === "Fiction");
  }
  if (NonFiction) {
    NonFictionFiltered = products.filter(
      (item) => item.category === "Non Fiction"
    );
  }
  if (SelfHelp) {
    SelfHelpFiltered = products.filter((item) => item.category === "Self Help");
  }

  return [...FictionFiltered,...NonFictionFiltered,...SelfHelpFiltered];
};
