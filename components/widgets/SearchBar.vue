<template>
  <label class="group max-w-screen-md mx-auto text-gray-500 bg-white flex items-center justify-between px-2 py-4  rounded-lg border border-gray-100 shadow-searchbar focus-within:text-green-500 ">
    <input dir="rtl" autocomplete="off" @input="input" @keyup="searchOnType" @keyup.enter="search" class="w-full px-2 bg-transparent outline-none text-gray-600" type="text" :value="value" placeholder="جستجو کنید..." maxlength="50" />
    <SearchIcon class="w-5 h-5" @click.native="search" />
  </label>
</template>

<script>
export default {
  name: 'searchBar',
  components: {
    SearchIcon: () => import('@/components/widgets/icons/SearchIcon'),
  },
  props: {
    value: String,
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    },
    search() {
      this.$emit('onSearch')
    },
    searchOnType(e) {
      this.search();
    }
  }
}
</script>

<style>

</style>