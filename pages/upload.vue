<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <avatar @selected="(val) => (selectedFile = val)" />
      <h2 class="font-normal mb-3 text-3xl text-white text-center">
        Hi, {{ $store.state.auth.user.username }}
      </h2>
      <p class="text-white text-center font-light">Please upload your selfie</p>
      <div class="flex justify-center items-center my-4">
        <button
          :disabled="!selectedFile"
          :class="!selectedFile ? 'opacity-50 cursor-not-allowed' : ''"
          class="block w-64 bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-2 text-md rounded-full"
          @click.prevent="upload"
        >
          Sign Up Now
        </button>
      </div>
      <div class="flex justify-center items-center">
        <button
          class="block w-64 bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-2 text-md rounded-full"
          @click="$router.push({ path: '/register-success' })"
        >
          Skip
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadAvatarPage',
  components: {
    Avatar: () => import('~/components/Avatar'),
  },
  layout: 'auth',
  data() {
    return {
      selectedFile: null,
    }
  },
  methods: {
    async upload() {
      const form = new FormData()
      form.append('file', this.selectedFile)
      await this.$store.dispatch('auth/UploadAvatar', form)
      this.$router.push({ path: '/register-success' })
    },
  },
}
</script>

<style scoped>
.auth-background {
  background-image: url('/sign-in-background.jpg');
  background-position: center;
  background-size: cover;
}
</style>
