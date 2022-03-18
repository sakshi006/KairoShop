export const categoryFilter = (products, categoryFilter) => {
  const { Fiction, NonFiction, SelfHelp } = categoryFilter;

  if (!Fiction && !NonFiction && !SelfHelp) return products; //if no category selected

  if (Fiction) { // if fiction and self help selected
    if(SelfHelp)
    {
       if(NonFiction)
       return products.filter(
        (item) =>
          item.category === "Non Fiction" ||
          item.category === "Fiction" ||
          item.category === "Self Help"
      );
        return products.filter(
            (item) =>
              item.category === "Fiction" || item.category === "Self Help"
          );
    }

    if (NonFiction) {
      if (SelfHelp) // if fiction slefhelp and nonfiction selected
        return products.filter(
          (item) =>
            item.category === "Non Fiction" ||
            item.category === "Fiction" ||
            item.category === "Self Help"
        );
      else //if ficiton non fiction selected
        return products.filter(
          (item) =>
            item.category === "Non Fiction" || item.category === "Fiction"
        );
    } else { //if only fiction selected
      return products.filter((item) => item.category === "Fiction");
    }
  }
// non fiction
  if (NonFiction) {
    if(SelfHelp){
        return products.filter(
            (item) =>
              item.category === "Non Fiction" || item.category === "Self Help"
          );
    }

    if (Fiction) {
      if (SelfHelp)
        return products.filter(
          (item) =>
            item.category === "Non Fiction" ||
            item.category === "Fiction" ||
            item.category === "Self Help"
        );
      else
        return products.filter(
          (item) =>
            item.category === "Non Fiction" || item.category === "Fiction"
        );
    } else {
      return products.filter((item) => item.category === "Non Fiction");
    }
  }
// self help
  if (SelfHelp) {
      if(NonFiction){
        return products.filter(
            (item) =>
              item.category === "Non Fiction" || item.category === "Self Help"
          );
      }
    if (Fiction) {
      if (NonFiction)
        return products.filter(
          (item) =>
            item.category === "Non Fiction" ||
            item.category === "Fiction" ||
            item.category === "Self Help"
        );
      else
        return products.filter(
          (item) => item.category === "Self Help" || item.category === "Fiction"
        );
    } else {
        if(NonFiction) return products.filter(
            (item) => item.category === "Self Help" || item.category === "Non Fiction"
          );
      return products.filter((item) => item.category === "Self Help");
    }
  }
  return products;
};
