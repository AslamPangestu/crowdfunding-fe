<template>
  <header class="flex header-container">
    <div style="height: 54px" class="pr-5">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <nuxt-link
          class="text-white hover:text-green-action text-md px-4 py-3"
          to="/"
          >Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="text-white hover:text-green-action text-md px-4 py-3"
          to="/projects"
          >Project
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="text-white hover:text-green-action text-md px-4 py-3"
          to="#"
          >Features
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          class="text-white hover:text-green-action text-md px-4 py-3"
          to="#"
          >Success Stories
        </nuxt-link>
      </li>
    </ul>
    <template v-if="!$store.state.auth.loggedIn">
      <ul class="flex ml-auto items-center mt-2">
        <li>
          <nuxt-link
            to="/register"
            class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-md rounded-full mr-4"
          >
            Sign Up
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/login"
            class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-md rounded-full"
          >
            Login
          </nuxt-link>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="flex ml-auto">
        <div class="dropdown inline-block relative z-10">
          <button
            class="bg-white text-gray-700 font-semibold py-2 px-2 w-52 rounded inline-flex items-center justify-between"
          >
            <div class="flex items-center">
              <img
                v-if="$store.getters['auth/HasImage']"
                :src="$store.getters['auth/Avatar']"
                class="h-8 w-8 rounded-full object-cover"
              />
              <span class="ml-2">
                {{ $store.state.auth.user.username }}
              </span>
            </div>
            <svg
              class="fill-current h-4 w-4 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <ul
            class="dropdown-menu absolute hidden text-gray-700 pt-1 shadow w-full -mt-2"
          >
            <nuxt-link to="/dashboard">
              <li
                class="cursor-pointer bg-white hover:bg-gray-100 hover:text-orange-action border-t py-2 px-4 block whitespace-no-wrap"
              >
                Dashboard
              </li>
            </nuxt-link>
            <nuxt-link to="/dashboard">
              <li
                class="cursor-pointer bg-white hover:bg-gray-100 border-t hover:text-orange-action py-2 px-4 block whitespace-no-wrap"
              >
                Account Settings
              </li>
            </nuxt-link>
            <li
              class="cursor-pointer rounded-b bg-white hover:bg-gray-100 border-t hover:text-orange-action py-2 px-4 block whitespace-no-wrap"
              @click="logout"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    async logout() {
      await this.$store.dispatch('auth/Logout')
    },
  },
}
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
