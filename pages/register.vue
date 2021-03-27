<template>
  <div class="h-screen flex justify-center items-center">
    <div
      class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg"
    />
    <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
      <div class="w-full lg:w-1/2 px-10 lg:px-0">
        <h2 class="font-normal mb-6 text-2xl text-white">Sign Up Account</h2>
        <form method="post" @submit.prevent="register">
          <div class="mb-4">
            <label class="font-normal text-md text-white block mb-2"
              >Full Name</label
            >
            <input
              v-model="fullname"
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write Your Name Here"
            />
          </div>
          <div class="mb-4">
            <label class="font-normal text-md text-white block mb-2"
              >Username</label
            >
            <input
              v-model="username"
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write Your Name Here"
            />
          </div>
          <div class="mb-4">
            <label class="font-normal text-md text-white block mb-2"
              >Occupation</label
            >
            <input
              v-model="occupation"
              type="text"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your occupation here"
            />
          </div>
          <div class="mb-4">
            <label class="font-normal text-md text-white block mb-2"
              >Email Address</label
            >
            <input
              v-model="email"
              type="email"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Write your email address here"
            />
          </div>
          <div class="mb-4">
            <label class="font-normal text-md text-white block mb-2"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
              placeholder="Type your password here"
            />
          </div>
          <div class="mb-4">
            <button
              class="block w-full bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-2 text-md rounded-full"
              type="submit"
            >
              Continue Sign Up
            </button>
          </div>
        </form>
        <div class="text-center">
          <p class="text-white text-md">
            Already have account?
            <nuxt-link to="/login" class="no-underline text-orange-action"
              >Sign In</nuxt-link
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  layout: 'auth',
  data() {
    return {
      fullname: '',
      username: '',
      email: '',
      occupation: '',
      password: '',
    }
  },
  methods: {
    async register() {
      const payload = {
        name: this.fullname,
        username: this.username,
        occupation: this.occupation,
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch('auth/Register', payload)
      this.$router.push({ path: '/upload' })
    },
  },
}
</script>

<style scoped>
.auth-background {
  background-color: #3b41e3;
  background-image: url('/sign-up-background.jpg');
  background-position: center;
  background-size: cover;
}
</style>
