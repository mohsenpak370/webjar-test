export const state = () => ({
  filteredCategories: new Set(),
  currentPage: 1,
})

export const mutations = {
  toggleCategoryFilter(state, categoryId) {
    if(state.filteredCategories.has(categoryId)) {
      state.filteredCategories.delete(categoryId);
    } else {
      state.filteredCategories.add(categoryId);
    }
  },
  nextPage(state) {
    state.currentPage = state.currentPage + 1;
  },
  previousPage(state) {
    state.currentPage = state.currentPage - 1;
  },
  setPage(state, page) {
    state.currentPage = page;
  }
}
