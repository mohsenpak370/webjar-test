<template>
  <nav class="w-full h-screen fixed inset-0 z-10 bg-white flex flex-col justify-center">
    <CloseBtn @click="$emit('closeNavbar')" class="absolute top-4 right-4 w-9 h-9 text-gray-600" />
    <HeaderNavItemMobile @routeChange="$emit('closeNavbar')" text="خانه" link="#" />
    <HeaderNavItemMobile @routeChange="$emit('closeNavbar')" text="محصولات" link="#" />
    <HeaderNavItemMobile @routeChange="$emit('closeNavbar')" text="خدمات" link="#" />
    <HeaderNavItemMobile @routeChange="$emit('closeNavbar')" text="وبلاگ" link="/blog" isActive />
  </nav>
</template>

<script>
export default {
  components: {
    CloseBtn: () => import('@/components/widgets/buttons/CloseBtn'),
    HeaderNavItemMobile: () => import('@/components/header/HeaderNavItemMobile'),
  }
}
</script>

<style>

</style>