export const state = () => ({
  showToastMessage: false,
  toastMessage: '',
  status: '',
});

export const mutations = {
  toggleToastMessage:(state) => {
    state.showToastMessage = !state.showToastMessage;
  }  ,
  setToastMessage:(state, toastMessage) => {
    state.toastMessage = toastMessage;
  } ,
  setStatus: (state, status) => {
    state.status = status;
  }
}
