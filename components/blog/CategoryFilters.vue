<template>
  <div class="w-full py-4 px-2">
    <h3 class="font-bold text-xl">دسته بندی</h3>
    <ul>
      <li v-for="category in categories" :key="category._id" class="mt-3 px-2 text-gray-500 2xl:text-lg flex items-center justify-between">
        <span>{{category.name}}</span>
        <CategoryFilterItem :category="category" @filterChanged="$emit('filterChanged')" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    CategoryFilterItem: () => import('@/components/blog/CategoryFilterItem'),
  },
  props: {
    categories: Array,
  },
}
</script>

<style>

</style>