<template>
  <transition name="fade">
    <div
      v-if="showToastMessage"
      class="w-10/12 mx-1/12 mb-8 px-2 py-2 text-center shadow-sm rounded-md text-xs font-medium text-gray-100 fixed bottom-0 z-20 sm:w-1/3 sm:mx-1/3 lg:w-1/5 lg:mx-2/5"
      :class=' status === "success" ? "bg-green-600" : "bg-red-600" '
      dir="auto"
    >
        {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    showToastMessage() {
      return this.$store.state.toasterStore.showToastMessage;
    },
    message() {
      return this.$store.state.toasterStore.toastMessage;
    },
    status() {
      return this.$store.state.toasterStore.status;
    }
  },
}
</script>
