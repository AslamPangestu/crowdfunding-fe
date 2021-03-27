<template>
  <div class="project-page">
    <section class="project-header pt-5 flex items-center justify-center">
      <h1 class="text-4xl text-white mb-5">Projects</h1>
    </section>
    <section class="container project-container mx-auto -mt-16">
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
    </section>
    <template v-if="!$store.state.auth.loggedIn">
      <div class="cta-clip"></div>
      <CallToAction />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  components: {
    Project: () => import('~/components/Card/Project'),
  },
  layout: 'main',
  async asyncData({ store }) {
    const campaigns = await store.dispatch('campaign/GetCampaigns')
    return { campaigns }
  },
}
</script>
