<template>
  <div class="project-page">
    <section class="dashboard-header pt-5"></section>
    <div class="flex flex-row">
      <Sidebar />
      <section class="content-section w-4/5">
        <div class="flex justify-between items-center mb-4">
          <div class="w-3/4 mr-6">
            <h2 class="text-4xl text-gray-900 font-medium">Projects</h2>
          </div>
          <button
            class="bg-orange-action hover:bg-green-action text-white font-semibold py-2 px-4 mt-8 text-md rounded w-32"
            @click="$router.push({ path: '/register' })"
          >
            New Project
          </button>
        </div>
        <div class="block">
          <!-- <div
            v-for="i in 5"
            :key="i"
            class="w-full lg:max-w-full lg:flex mb-4"
          >
            <ProjectWide />
          </div> -->
          <div
            class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal justify-center"
          >
            <h2 class="text-xl text-gray-900 py-16">
              Daftar Campaign Tidak Tersedia
            </h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardProjectsPages',
  components: {
    // ProjectWide: () => import('~/components/Card/ProjectWide'),
  },
  layout: 'main',
  // middleware: 'auth',
  async asyncData({ store }) {
    const campaigns = await store.dispatch('campaign/GetCampaignsUser')
    return { campaigns }
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
