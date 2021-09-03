<template>
  <div class="fixed inset-0 w-screen h-screen flex items-center justify-center">
    <div @click="$emit('onClose')" class="absolute w-full h-full bg-black opacity-50"></div>
    <section dir="rtl" class="relative w-full h-screen sm:w-2/3 sm:h-auto sm:p-40 lg:p-2 lg:w-full max-w-screen-xl p-2 bg-white flex">
      <CloseBtn @click="$emit('onClose')" class="absolute top-3 left-3 z-10 w-8 h-8 p-1 rounded-full text-white bg-red-400" />
      <div class="w-screen h-screen sm:h-96 lg:w-2/5 lg:h-auto  flex flex-col items-center justify-center">
        <h2 class="text-2xl sm:text-4xl">ورود به حساب کاربری</h2>
        <div class="mt-16 focus-within:text-green-500">
          <p class="w-64 lg:w-96 text-right text-lg">نام کاربری</p>
          <label class="h-12 w-64 lg:w-96 border border-current rounded-lg flex items-center overflow-hidden">
            <UserIcon class="w-8 h-8 flex-shrink-0" />
            <input class="appearance-none bg-transparent h-12 w-full px-2 border-none focus:outline-none" type="text" v-model="username" placeholder="نام کاربری خود را وارد کنید">
          </label>
        </div>
        <div class="mt-8 focus-within:text-green-500">
          <p class="w-64 lg:w-96 text-right text-lg">کلمه عبور</p>
          <label class="h-12 w-64 lg:w-96 border border-current rounded-lg flex items-center overflow-hidden">
            <LockIcon class="w-8 h-8 flex-shrink-0" />
            <input class="appearance-none bg-transparent h-12 w-full px-2 border-none focus:outline-none" type="password" v-model="password" placeholder="رمز عبور خود را وارد کنید">
            <EyeIcon class="mx-0.5 w-8 h-8 flex-shrink-0" />
          </label>
        </div>
        <PrimaryBtn class="h-12 w-64 lg:w-96 mt-8" @click="login" text="ورود" />
      </div>
      <div class="hidden absolute w-0 lg:block lg:relative lg:w-3/5 bg-gray-50">
        <LoginImage class="w-full h-96 my-52" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    UserIcon: () => import('@/components/widgets/icons/UserIcon'),
    LockIcon: () => import('@/components/widgets/icons/LockIcon'),
    EyeIcon: () => import('@/components/widgets/icons/EyeIcon'),
    LoginImage: () => import('@/components/widgets/LoginImage'),
    CloseBtn: () => import('@/components/widgets/buttons/CloseBtn'),
    PrimaryBtn: () => import('@/components/widgets/buttons/PrimaryBtn'),
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      let data = {
        userName: this.username,
        password: this.password
      }
      let response = await this.$login(data);
      if(response.message == 'Request failed with status code 401') {
        this.$toast.error('کاربری با این مشخصات یافت نشد');
      } else if(response.type == 'error') {
        this.$toast.error('مشکلی پیش آمده، لطفا مجددا امتحان کنید');
      } else {
        this.$toast.success('شما با موفقیت وارد شدید.');
        this.$emit('onClose');
      }
    }
  }
}
</script>

<style>

</style>