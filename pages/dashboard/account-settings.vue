<template>
  <div class="project-page">
    <section class="dashboard-header pt-5"></section>
    <div class="flex flex-row">
      <Sidebar />
      <section class="content-section w-4/5">
        <div class="flex justify-between items-center mb-8">
          <div class="w-3/4 mr-6 mt-4">
            <h2 class="text-4xl text-gray-900 font-medium">Account Setting</h2>
          </div>
        </div>
        <div class="flex">
          <div
            class="w-1/4 mr-6 border border-gray-400 bg-white rounded flex flex-col justify-center items-center"
          >
            <avatar
              :default-image="$store.getters['auth/Avatar']"
              @selected="(val) => (selectedFile = val)"
            />
            <button
              :disabled="!selectedFile"
              :class="!selectedFile ? 'opacity-50 cursor-not-allowed' : ''"
              class="bg-orange-action hover:bg-green-action text-white font-semibold py-2 px-4 text-md rounded w-40"
              @click.prevent="updateAvatar"
            >
              Update Avatar
            </button>
          </div>
          <div class="w-3/4 mr-6 p-6 border border-gray-400 bg-white rounded">
            <form method="post" @submit.prevent="updateProfile">
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                >
                  Full Name
                </label>
                <input
                  v-model="fullname"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                >
                  Username
                </label>
                <input
                  v-model="username"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Masukkan username"
                />
              </div>
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="Masukkan email"
                />
              </div>
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                >
                  Occupation
                </label>
                <input
                  v-model="occupation"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Masukkan pekerjaan"
                />
              </div>
              <div class="flex justify-end items-center">
                <button
                  class="bg-orange-action hover:bg-green-action text-white font-semibold py-2 px-4 text-md rounded w-40"
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountSettingsPages',
  components: {
    Avatar: () => import('~/components/Avatar'),
  },
  layout: 'main',
  middleware: 'auth',
  async asyncData({ store }) {
    const user = await store.dispatch('auth/GetProfile')
    return {
      user,
      fullname: user.name,
      username: user.username,
      email: user.email,
      occupation: user.occupation,
    }
  },
  data() {
    return {
      selectedFile: null,
      fullname: '',
      username: '',
      email: '',
      occupation: '',
    }
  },
  methods: {
    async updateAvatar() {
      const form = new FormData()
      form.append('file', this.selectedFile)
      await this.$store.dispatch('auth/UploadAvatar', form)
      this.$router.go()
    },
    async updateProfile() {
      const payload = {
        name: this.fullname,
        username: this.username,
        occupation: this.occupation,
        email: this.email,
      }
      await this.$store.dispatch('auth/UpdateProfile', payload)
      this.$router.go()
    },
  },
}
</script>

<style scoped>
.menu-section {
  padding: 24px;
  margin-top: 8px;
}
.content-section {
  padding: 24px;
}
</style>
