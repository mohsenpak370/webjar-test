<template>
  <button  tabindex="0" @click="$emit('click')" class="focus:outline-none truncate rounded-lg transform transition duration-300 bg-green-500 text-white disabled:bg-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed" :disabled="disabled">
    <span class="truncate">{{text}}</span>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    disabled: {
      default: false,
      type: Boolean
    }
  },
}
</script>

<style>

</style>