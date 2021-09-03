<template>
  <div v-if="$isLoading()" @click="loaded" class="fixed w-full h-screen z-40 inset-0 flex items-center justify-center">
    <div class="absolute w-full h-full bg-gray-900 opacity-75"></div>
    <SpinnerIcon class="text-gray-100 w-12 h-12" />
  </div>
</template>

<script>
export default {
  components: {
    SpinnerIcon: () => import('@/components/widgets/icons/SpinnerIcon.vue')
  },
  methods: {
    loaded() {
      return this.$store.commit('loadingOverlay/hideLoadingOverlay')
    }
  }
}
</script>
