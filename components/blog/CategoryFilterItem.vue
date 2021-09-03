<template>
  <label class="relative flex items-center justify-center">
    <input @input="toggleFilter" v-model="isNotFiltered" type="checkbox" class="appearance-none w-7 h-7 rounded border-2 border-gray-500 checked:border-green-500 focus:outline-none" />
    <CheckIcon v-if="isNotFiltered" class="absolute w-5 h-5 text-green-500" />
  </label>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {
    CheckIcon: () => import('@/components/widgets/icons/CheckIcon'),
  },
  data() {
    return {
      isNotFiltered: !this.$store.state.posts.filteredCategories.has(this.category._id)
    }
  },
  props: {
    category: Object,
  },
  methods: {
    ...mapMutations({
      toggle: 'posts/toggleCategoryFilter'
    }),
    toggleFilter() {
      this.toggle(this.category._id);
      this.$emit('filterChanged')
    }
  }
}
</script>

<style>

</style>