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
            class="bg-orange-action hover:bg-green-action text-white font-semibold py-2 px-4 mt-8 text-md rounded w-40"
            @click="$router.push({ path: '/dashboard/projects/create' })"
          >
            + New Project
          </button>
        </div>
        <div class="block">
          <template v-if="!campaignsEmpty">
            <div
              v-for="campaign in campaigns"
              :key="campaign.id"
              class="w-full lg:max-w-full lg:flex mb-4"
            >
              <project-wide
                :id="campaign.id"
                :image-url="campaign.image_url"
                :title="campaign.title"
                :short-desc="campaign.short_description"
                :current-amount="campaign.current_amount"
                :target-amount="campaign.target_amount"
              />
            </div>
          </template>
          <template v-else>
            <div
              class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal justify-center"
            >
              <h2 class="text-xl text-gray-900 py-16">
                Daftar Campaign Tidak Tersedia
              </h2>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { AmountIDR } from '~/utils/formatter'
export default {
  name: 'DashboardProjectsPages',
  components: {
    ProjectWide: () => import('~/components/Card/ProjectWide'),
  },
  layout: 'main',
  middleware: 'auth',
  async asyncData({ store }) {
    const campaigns = await store.dispatch('campaign/GetCampaignsUser')
    return { campaigns }
  },
  computed: {
    campaignsEmpty() {
      return this.campaigns && this.campaigns.length === 0
    },
  },
  methods: {
    formatAmount(value) {
      return AmountIDR(value)
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
