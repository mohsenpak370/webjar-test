export default ({ app, store }, inject) => {
  const isLoading = () => store.state.loadingOverlay.isLoading;
  inject('isLoading', isLoading);

  const showLoading = () => store.commit('loadingOverlay/showLoadingOverlay');
  inject('showLoading', showLoading);

  const hideLoading = () => store.commit('loadingOverlay/hideLoadingOverlay');
  inject('hideLoading', hideLoading);

  const toast = {
    toastMessage(message) {
      store.commit('toasterStore/toggleToastMessage');
      store.commit('toasterStore/setToastMessage', message);
      setTimeout(() => {
        store.commit('toasterStore/toggleToastMessage');
      }, 5000);
    },
    success(message) {
      this.toastMessage(message);
      store.commit('toasterStore/setStatus', 'success');
    },
    error(message) {
      this.toastMessage(message);
      store.commit('toasterStore/setStatus', 'error');
    },
  }
  inject('toast', toast);  

  // get date without week day
  const getDate = date => {
    const postDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return postDate.toLocaleDateString('fa', options).split('،')[0];
  }
  inject('getDate', getDate);
}
