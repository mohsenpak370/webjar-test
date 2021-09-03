<template>
  <nuxt-link @click.stop="$emit(routeChange)" :to="link" class="block h-20 w-full flex items-center justify-center text-lg"
    :class="isActive ? 'text-green-500' : 'text-gray-800'"
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