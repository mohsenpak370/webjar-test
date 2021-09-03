<template>
  <nav class="w-full flex">
    <HeaderNavItem text="خانه" link="#" />
    <HeaderNavItem text="محصولات" link="#" />
    <HeaderNavItem text="خدمات" link="#" />
    <HeaderNavItem text="وبلاگ" link="/blog" isActive />
  </nav>
</template>

<script>
export default {
  components: {
    HeaderNavItem: () => import('@/components/header/HeaderNavItem'),
  }
}
</script>

<style>

</style>