export const filterReducer = (state, action) => {
  // console.log("STATEEEEEEE",state,action.type)
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };
    case "NAMEA-Z":
      return { ...state, sortBy: "NAMEA-Z" };
    case "NAMEZ-A":
      return { ...state, sortBy: "NAMEZ-A" };
    case "RATING":
      return { ...state, sortBy: "RATING" };
    case "BEST_SELLER":
      return { ...state, BestSeller: !state.BestSeller };
    case "FICTION":
      return {
        ...state,
        category: { ...state.category, fiction: !state.category.fiction },
      };
    case "NON_FICTION":
      return {
        ...state,
        category: { ...state.category, nonFiction: !state.category.nonFiction },
      };
    case "SELF_HELP":
      return {
        ...state,
        category: { ...state.category, selfHelp: !state.category.selfHelp },
      };
    case "ROMANCE":
      return {
        ...state,
        category: { ...state.category, romance: !state.category.romance },
      };
    case "HORROR":
      return {
        ...state,
        category: { ...state.category, horror: !state.category.horror },
      };
    case "PRICE":
      return {
        ...state,
        price: action.price_value,
      };
    case "CLEAR":
      return {
        sortBy: "",
        category: { Fiction: false, NonFiction: false, SelfHelp: false },
        isBestSeller: "",
        price: 1200,
        rating: "",
      };

    default:
      return state;
  }
};
