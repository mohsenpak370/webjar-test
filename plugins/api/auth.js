export default ({ app }, inject) => {
  const login = async (loginData) => {
    try {
      app.$showLoading();
      let response = await app.$auth.loginWith('local', {data: loginData});
      let user = {
        fullName: response.data.fullName,
        userName: response.data.userName,
        id: response.data._id,
      }
      localStorage.setItem('user', JSON.stringify(user));
      app.$auth.setUser(user);
      app.$hideLoading();
      return { type: 'success', message: 'successfulLogin'};
    } catch (error) {
      app.$hideLoading()
      return { type: 'error', message: error.message};
    }
  };
  inject('login', login);

  const logout = async () => {
    app.router.push({path: '/blog'});
    localStorage.removeItem('auth._token.local');
    localStorage.removeItem('user');
    document.cookie = "auth._token.local=; auth._token_expiration.local=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    app.$auth.$storage.setUniversal('loggedIn', false);
  };
  inject('logout', logout);
}