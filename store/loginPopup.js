export const state = () => ({
  showPopup: false,
});

export const mutations = {
  showLoginPopup:(state) => {
    state.showPopup = true;
  },
  hideLoginPopup:(state) => {
    state.showPopup = false;
  },
}
