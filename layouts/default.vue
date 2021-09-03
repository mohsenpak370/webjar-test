<template>
  <main id="screen-height">
    <Header @goToLogin="showLogin" />
    <nuxt class="transition-all duration-200 px-4 lg:px-20 xl:px-40" />
    <!-- <Footer /> -->
    <LoginPopup v-if="$store.state.loginPopup.showPopup" @onClose="hideLogin" />
    <ToastMessage />
    <LoadingOverlay />
  </main>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  components: {
    ToastMessage: () => import('@/components/widgets/ToastMessage'),
    LoadingOverlay: () => import('@/components/widgets/LoadingOverlay'),
    LoginPopup: () => import('@/components/widgets/LoginPopup'),
  },
  data() {
    return {
      showLoginPopup: false,
    }
  },
  mounted() {
    if(localStorage.user) {
      let user = JSON.parse(localStorage.user)
      this.$auth.setUser(user);
    }
  },
  methods: {
    ...mapMutations({
      showLogin: 'loginPopup/showLoginPopup',
      hideLogin: 'loginPopup/hideLoginPopup'
    })
  }
}
</script>