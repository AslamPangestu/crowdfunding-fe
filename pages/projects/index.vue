<template>
  <div class="project-page">
    <section class="project-header pt-5 flex items-center justify-center">
      <h1 class="text-4xl text-white mb-5">Projects</h1>
    </section>
    <section class="container project-container mx-auto -mt-16">
      <div v-if="!campaignsEmpty">
        <div class="grid grid-cols-3 gap-4 pb-8">
          <div
            v-for="campaign in campaigns"
            :key="campaign.id"
            class="card-project w-full border border-gray-500 rounded-20"
          >
            <project
              :id="campaign.id"
              :image-url="campaign.image_url"
              :title="campaign.title"
              :short-desc="campaign.short_description"
              :current-amount="campaign.current_amount"
              :target-amount="campaign.target_amount"
            />
          </div>
        </div>
        <pagination />
      </div>
      <div v-else>
        <div
          class="card-project w-full border border-gray-500 rounded-20 flex justify-center items-center"
        >
          <h2 class="text-3xl text-gray-900 py-16">
            Daftar Campaign Tidak Tersedia
          </h2>
        </div>
      </div>
    </section>
    <template v-if="!isLoggedIn">
      <call-to-action />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  components: {
    Project: () => import('~/components/Card/Project'),
    Pagination: () => import('~/components/Pagination'),
    CallToAction: () => import('~/components/CallToAction'),
  },
  layout: 'main',
  async asyncData({ store, route }) {
    const page = route.query.page
    const campaigns = await store.dispatch('campaign/GetCampaigns', { page })
    return { campaigns }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.loggedIn
    },
    campaignsEmpty() {
      return this.campaigns && this.campaigns.length === 0
    },
  },
}
</script>
