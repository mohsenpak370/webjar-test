export const state = () => ({
  isLoading: false,
});

export const mutations = {
  showLoadingOverlay:(state) => {
    state.isLoading = true;
  },
  hideLoadingOverlay:(state) => {
    state.isLoading = false;
  },
}
