<template>
  <div dir="rtl" class="h-16 w-11/12 mx-auto my-4 flex flex-row-reverse items-center justify-center">
    <button @click="previousPage" class="shadow-button w-6 h-6 sm:w-12 sm:h-12 mr-3 sm:mr-8 rounded sm:rounded-xl focus:outline-none flex-shrink-0 flex items-center justify-center" :disabled="$store.state.posts.currentPage == 1">
      <ChevronLeftIcon class="w-4 h-4 sm:w-10 sm:h-10" :class="$store.state.posts.currentPage == 1 ? 'text-green-300' : 'text-green-500'" />
    </button>
    <div
      v-for="i in 2"
      :key="`start-${i}`"
    >
      <span
        @click="goTo(i)"
        class="w-6 h-6 sm:w-12 sm:h-12 mx-0.5 rounded sm:rounded-xl flex items-center justify-center border border-green-500 cursor-pointer"
        :class=' i === $store.state.posts.currentPage ? "bg-green-500 text-white" : "bg-white text-green-500"'
      >{{i.toLocaleString('fa')}}</span>
    </div>
    <DotsIcon v-if="$store.state.posts.currentPage > 3" class="mx-1.5 w-4 h-4 sm:w-10 sm:h-10 text-green-500" />
    <span
      v-if="($store.state.posts.currentPage > 2 && $store.state.posts.currentPage < (totalPages - 1))"
      class="w-6 h-6 sm:w-12 sm:h-12 mx-0.5 rounded sm:rounded-xl flex items-center justify-center bg-green-500 text-white border border-green-500 cursor-pointer flex-shrink-0"
    >{{$store.state.posts.currentPage.toLocaleString('fa')}}</span>
    <DotsIcon v-if="$store.state.posts.currentPage < (totalPages -2)" class="mx-1.5 w-4 h-4 sm:w-10 sm:h-10 text-green-500" />
    <div
      v-for="i in 2"
      :key="`end-${i}`"
    >
      <span
        @click="goTo(totalPages - (2 - i))"
        class="w-6 h-6 sm:w-12 sm:h-12 mx-0.5 rounded sm:rounded-xl flex items-center justify-center border border-green-500 cursor-pointer"
        :class='(totalPages - (2 - i)) === $store.state.posts.currentPage ? "bg-green-500 text-white" : "bg-white text-green-500"'
      >{{(totalPages - (2 - i)).toLocaleString('fa')}}</span>
    </div>
    <button @click="nextPage" class="shadow-button w-6 h-6 sm:w-12 sm:h-12 ml-3 sm:ml-8 rounded sm:rounded-xl  flex-shrink-0 flex items-center justify-center" :disabled="$store.state.posts.currentPage == totalPages">
      <ChevronLeftIcon class="w-4 h-4 sm:w-10 sm:h-10 transform rotate-180" :class="$store.state.posts.currentPage == totalPages ? 'text-green-300' : 'text-green-500'" />
    </button>
  </div>
  
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  components: {
    DotsIcon: () => import('@/components/widgets/icons/DotsIcon'),
    ChevronLeftIcon: () => import('@/components/widgets/icons/ChevronLeftIcon'),
  },
  props: {
    totalPages: Number,
  },
  methods: {
    goTo(pageNumber) {
      this.$store.commit('posts/setPage', pageNumber);
    },
    ...mapMutations({
      nextPage: 'posts/nextPage',
      previousPage: 'posts/previousPage'
    }),
  },

}
</script>

