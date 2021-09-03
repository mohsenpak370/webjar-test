<template>
  <div class="grid gap-16 px-4 py-16 max-w-screen-lg">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
    <Pagination :totalPages="totalPages" />
  </div>
</template>

<script>
export default {
  name: 'PostContainer',
  components: {
    PostCard: () => import('@/components/blog/PostCard'),
    Pagination: () => import('@/components/blog/Pagination')
  },
  data() {
    return {
    }
  },
  props: {
    posts: Array,
    totalPages: Number,
  },
  methods: {
    // getCurrentPagePosts() {
    //   let start = (this.currentPage - 1) * 4;
    //   let end = this.currentPage * 4;
    //   console.log('get page', start, end);
    //   this.currentPagePosts = this.posts.slice(start, end);
    // }
  }
}
</script>

<style>

</style>