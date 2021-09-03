<template>
  <div dir="rtl" class="h-16 sm:h-32 px-4 lg:px-20 xl:px-40 flex items-center justify-between shadow-header transition-all duration-200">
    <CodeIcon class="hidden md:block w-16 h-16 text-green-400 flex-shrink-0" />
    <BurgerMenuBtn @click="showNavbar = true" class="sm:hidden w-8 h-8 text-gray-600" />
    <HeaderNav class="hidden sm:flex"/>
    <HeaderNavMobile v-if="showNavbar" @closeNavbar="showNavbar = false" class="sm:hidden"/>
    <SecondaryBtn v-if="!$auth.loggedIn" @click="$emit('goToLogin')" text="ورود" class="w-24 sm:w-40 py-1.5 sm:py-3 sm:text-lg flex-shrink-0" />
    <div v-if="$auth.loggedIn" class="relative flex items-center flex-shrink-0">
      <UserIcon class="w-6 h-6 sm:w-10 sm:h-10 text-green-500 md:ml-4 flex-shrink-0" />
      <p class="text-green-500 md:ml-10 sm:text-lg flex-shrink-0 cursor-default">{{$auth.user.fullName}}</p>
      <button @click="showLogoutBox = !showLogoutBox" class="flex-shrink-0 focus:outline-none">
        <ChevronLeftIcon class="w-4 h-4 sm:w-6 sm:h-6 text-green-500 transform -rotate-90 transition duration-300" :class="showLogoutBox ? 'rotate-90' : '-rotate-90'" />
      </button>
      <div v-if="showLogoutBox" @click="$logout" class="absolute top-12 left-0 w-48 h-20 p-4 flex items-center text-red-400 bg-white rounded-lg shadow-searchbar cursor-pointer">
        <LogoutIcon class="w-8 h-8 ml-4" />
        <span>خروج</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false,
      showLogoutBox: false,
    }
  },
  components: {
    CodeIcon: () => import('@/components/widgets/icons/CodeIcon'),
    UserIcon: () => import('@/components/widgets/icons/UserIcon'),
    LogoutIcon: () => import('@/components/widgets/icons/LogoutIcon'),
    ChevronLeftIcon: () => import('@/components/widgets/icons/ChevronLeftIcon'),
    BurgerMenuBtn: () => import('@/components/widgets/buttons/BurgerMenuBtn'),
    SecondaryBtn: () => import('@/components/widgets/buttons/SecondaryBtn'),
    HeaderNav: () => import('@/components/header/HeaderNav'),
  }
}
</script>

<style>

</style>