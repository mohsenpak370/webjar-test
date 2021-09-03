<template>
  <div class="">
    <section dir="rtl" class="" v-if="!$route.fullPath.includes('post')">
      <div class="relative flex items-center justify-between">
        <div class="my-4 sm:my-8 flex items-center">
          <span class="text-gray-600">خانه</span>
          <ChevronLeftIcon class="w-4 h-4 text-gray-600" />
          <span class="text-green-500">وبلاگ</span>
        </div>
        <AdjustmentsBtn @click="showFilterPopup = !showFilterPopup" class="block md:hidden w-6 h-6 text-gray-500 hover:text-gray-600"/>
        <div v-if="showFilterPopup" class="absolute top-16 left-0 w-72 z-10">
          <div @click="showFilterPopup = false" class="fixed inset-0 w-screen h-screen"></div>
          <CategoryFilters class="bg-white rounded-lg shadow-searchbar" :categories="postCategories" @filterChanged="filterChanged" />
        </div>
      </div>
      <section>
        <h1 class="my-4 sm:my-8 text-center font-black text-xl sm:text-4xl">وبلاگ</h1>
        <SearchBar v-model="searchQuery" @onSearch="getFinalResults"/>
      </section>
      <section v-if="!$fetchState.pending" class="flex ">
        <div class="hidden md:block w-80 2xl:w-96 2xl:pl-8 flex-shrink-0">
          <CategoryFilters class="mt-12 bg-white rounded-lg shadow-card" :categories="postCategories" @filterChanged="filterChanged" />
        </div>
        <PostContainer :key="`posts-${refreshKey}`" :posts="currentPagePosts" :totalPages="totalPages" />
      </section>
      <div v-if="$fetchState.pending" class="md:pr-80 2xl:pr-96">
        <div v-for="i in 4" :key="i" class="my-16 bg-gray-200 w-full h-64 rounded-lg animate-pulse"></div>
      </div>
    </section>
    <nuxt-child v-else :posts="posts" />
  </div>
</template>

<script>
import ForceRefresh from '@/mixins/forceRefresh';

export default {
  mixins: [ForceRefresh],
  components: {
    ChevronLeftIcon: () => import('@/components/widgets/icons/ChevronLeftIcon'),
    AdjustmentsBtn: () => import('@/components/widgets/buttons/AdjustmentsBtn'),
    SearchBar: () => import('@/components/widgets/SearchBar'),
    PostContainer: () => import('@/components/blog/PostContainer'),
    CategoryFilters: () => import('@/components/blog/CategoryFilters'),
  },
  data() {
    return {
      postCategories: [],
      posts: [],
      filteredPosts: [],
      finalPosts: [],
      searchQuery: '',
      showFilterPopup: false,
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.finalPosts.length / 4);
    },
    currentPagePosts() {
      return this.finalPosts.slice(((this.$store.state.posts.currentPage - 1) * 4), (this.$store.state.posts.currentPage * 4));
    }
  },
  async fetch() {
    let [categories, posts] = await Promise.all([
      this.$getPostCategories(),
      this.$getPosts()
    ]);
    this.postCategories = categories;
    this.posts = posts;
    this.filteredPosts = posts;
    this.finalPosts = posts;
  },
  methods: {
    filterChanged() {
      this.filteredPosts = this.posts.filter(post => !this.$store.state.posts.filteredCategories.has(post.category));
      this.getFinalResults();
    },
    getFinalResults() {
      let posts = JSON.parse(JSON.stringify(this.filteredPosts));
      if(this.searchQuery) {
        let searchResults = posts.filter(post => post.title.includes(this.searchQuery) || post.author.includes(this.searchQuery));
        this.finalPosts = searchResults;
      } else {
        this.finalPosts = posts;
      }
      this.forceRefresh();
    }
  }
}
</script>

<style>

</style>