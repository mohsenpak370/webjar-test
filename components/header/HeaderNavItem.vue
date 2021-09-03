<template>
  <nuxt-link :to="link" class="h-32 w-24 lg:w-28 flex items-center justify-center text-lg hover:text-green-500 border-b-4 hover:border-green-500"
    :class="isActive ? 'text-green-500 border-green-500' : 'text-gray-800 border-transparent'"
  >
    {{text}}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    isActive: Boolean,
  }
}
</script>

<style>

</style>