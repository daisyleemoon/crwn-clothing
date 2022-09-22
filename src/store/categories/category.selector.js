export const selectorCategoriesMap = (state) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

export const selectCategoriesIsLoading = (state) => state.categories.isLoading;
