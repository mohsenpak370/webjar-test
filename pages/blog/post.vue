<template>
  <div dir="rtl" v-if="post" class="">
    <div class="my-4 sm:my-8 flex items-center">
      <span class="text-gray-600">خانه</span>
      <ChevronLeftIcon class="w-4 h-4 text-gray-600" />
      <span class="text-gray-600">وبلاگ</span>
      <ChevronLeftIcon class="w-4 h-4 text-gray-600" />
      <span class="text-green-500">{{post.title}}</span>
    </div>
    <article class="mx-auto max-w-xl flex flex-col items-center">
      <h1 class="my-4 sm:my-8 text-center font-black text-xl sm:text-4xl">ویژگی‌های یک سایت خوب</h1>
      <div class="relative w-full pb-full rounded-lg flex-shrink-0">
        <img class="absolute inset-0 w-full h-full object-cover rounded-lg" :src="imageLink" alt="">
      </div>
      <section v-html="post.body" class="pt-8 pb-32 post-body"></section>
    </article>
  </div>
</template>

<script>
export default {
    components: {
    ChevronLeftIcon: () => import('@/components/widgets/icons/ChevronLeftIcon'),
  },
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth.loggedIn) {
      return redirect('/blog')
    }
  },
  data() {
    return {
      postId: this.$route.query.id,
      post: null,
      postIndex: null,
    }
  },
  computed: {
    imageLink() {
      let host = this.post.introImageUrl.host,
          path = this.post.introImageUrl.path.slice(1);
      return `${host}${path}`
    },
  },
  props: {
    posts: Array,
  },
  mounted() {
    this.post = this.posts.find(post => post._id == this.postId);
    this.postIndex = this.posts.findIndex(post => post._id == this.postId);
  }

}
</script>

<style >
.post-body img {
  width: 100%;
  margin: 0.5rem;
  border-radius: 8px;
}
</style>