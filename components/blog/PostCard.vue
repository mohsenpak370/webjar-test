<template>
  <div class="relative shadow-card rounded-lg lg:flex">
    <div class="relative w-full pb-1/2 lg:w-1/2 lg:pb-1/5 xl:w-1/3 xl:pb-1/4 rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg flex-shrink-0">
      <img class="absolute inset-0 w-full h-full object-cover rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg" :src="imageLink" alt="">
    </div>
    <div class="relative lg:w-1/2 xl:w-2/3 py-4 px-8 md:pb-16 2xl:pb-0 2xl:px-16 2xl:pl-52 flex flex-col justify-between">
      <div class="">
        <h2 class="w-full leading-8 lg:text-lg text-gray-800 font-medium">{{post.title}}</h2>
        <p class="text-sm lg:text-base my-3 lg:mt-6 line-clamp-3 text-gray-600 leading-8 sm:leading-10">{{cleanPostBody}}</p>
      </div>
      <div class="flex items-center flex-wrap xl:pb-3">
        <span class="flex items-center text-xs lg:text-sm font-light mb-5 ml-5 2xl:ml-10 flex-shrink-0 truncate"><CalendarIcon class="w-4 sm:w-5 h-4 sm:h-5 ml-1" /> {{$getDate(post.createdAt)}}</span>
        <span class="flex items-center text-xs lg:text-sm font-light mb-5 ml-5 2xl:ml-10 flex-shrink-0 truncate"><CommentIcon class="w-4 sm:w-5 h-4 sm:h-5 ml-1" /> {{post.commentCount.toLocaleString('fa')}} نظر</span>
        <span class="flex items-center text-xs lg:text-sm font-light mb-5 ml-5 2xl:ml-10 flex-shrink-0 truncate"><UserIcon class="w-4 sm:w-5 h-4 sm:h-5 ml-1" /> {{post.author}}</span>
      </div>
    </div>
    <div class="mx-4 pt-4 sm:m-0 sm:p-0">
      <PrimaryBtn @click="goToPost" text="بیشتر" class="relative sm:absolute bottom-4 sm:left-4 w-full sm:w-40 py-1.5 sm:py-3 2xl:text-lg " />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PostCard',
  components: {
    PrimaryBtn: () => import('@/components/widgets/buttons/PrimaryBtn'),
    CalendarIcon: () => import('@/components/widgets/icons/CalendarIcon'),
    CommentIcon: () => import('@/components/widgets/icons/CommentIcon'),
    UserIcon: () => import('@/components/widgets/icons/UserIcon'),
  },
  data() {
    return {

    }
  },
  props: {
    post: Object,
  },
  computed: {
    imageLink() {
      let host = this.post.introImageUrl.host,
          path = this.post.introImageUrl.path.slice(1);
      return `${host}${path}`
    },
    cleanPostBody() {
      let seperator = '<span style="color: #212529; font-family: IRANSans; font-size: 14.4px; text-align: right; background-color: #ffffff;">'
      let bodyText = this.post.body.split(seperator)[1].split('</span>')[0];
      return bodyText;
    }
  },
  methods: {
    ...mapMutations({
      showLogin: 'loginPopup/showLoginPopup',
      hideLogin: 'loginPopup/hideLoginPopup'
    }),
    goToPost() {
      if(!this.$auth.loggedIn) {
        this.showLogin();
        return;
      }
      this.$router.push(`${this.$route.path}/post?id=${this.post._id}`);
    }
  }
}
</script>

<style>

</style>