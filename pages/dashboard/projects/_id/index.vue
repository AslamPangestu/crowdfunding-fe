<template>
  <div class="project-page">
    <section class="dashboard-header pt-5"></section>
    <div class="flex flex-row">
      <Sidebar />
      <section class="content-section w-4/5">
        <div class="flex justify-between items-center mb-4">
          <div class="w-3/4 mr-6">
            <h2 class="text-4xl text-gray-900 font-medium">Detail Campaign</h2>
          </div>
          <nuxt-link
            class="bg-orange-action hover:bg-green-action text-white font-semibold py-2 px-4 mt-8 text-md text-center rounded w-32"
            :to="{
              name: 'dashboard-projects-id-edit',
              params: { id: campaignID },
            }"
          >
            Edit
          </nuxt-link>
        </div>
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4">
            <div
              class="border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
              <div>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  {{ campaign.title }}
                </div>
                <p class="text-sm font-bold flex items-center mb-1">
                  Short Description
                </p>
                <p class="text-gray-700 text-base">
                  {{ campaign.short_description }}
                </p>
                <p class="text-sm font-bold flex items-center mb-1">
                  Description
                </p>
                <p class="text-gray-700 text-base">
                  {{ campaign.description }}
                </p>
                <p class="text-sm font-bold flex items-center mb-1 mt-4">
                  What Will Funders Get
                </p>
                <ul v-if="campaign.perks.length !== 0" class="list-disc ml-5">
                  <li v-for="(perk, id) in campaign.perks" :key="id">
                    {{ perk }}
                  </li>
                </ul>
                <p v-else>No Perks</p>
                <p class="text-sm font-bold flex items-center mb-1 mt-4">
                  Price
                </p>
                <p class="text-4xl text-gray-700 text-base">
                  {{ targetAmount }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">Gallery</h3>
          </div>
          <div class="w-1/4 text-right">
            <a
              href="#"
              class="bg-green-action hover:bg-green-action text-white font-bold px-4 py-1 rounded inline-flex items-center"
            >
              Upload
            </a>
          </div>
        </div>
        <div class="flex -mx-2">
          <div
            class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-1.jpg" alt="" class="rounded w-full" />
            </figure>
          </div>
          <div
            class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-2.jpg" alt="" class="rounded w-full" />
            </figure>
          </div>
          <div
            class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-3.jpg" alt="" class="rounded w-full" />
            </figure>
          </div>
          <div
            class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img src="/project-slider-4.jpg" alt="" class="rounded w-full" />
            </figure>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">
              Transaction History
            </h3>
          </div>
          <div>Total Transaction: {{ currentAmount }}</div>
        </div>
        <div class="block mb-2">
          <template v-if="!transactionsEmpty">
            <div
              v-for="transaction in transactions"
              :key="transaction.id"
              class="w-full lg:max-w-full lg:flex mb-4"
            >
              <transaction
                :title="transaction.name"
                :trx-date="transaction.created_at"
                :amount="transaction.amount"
              />
            </div>
          </template>
          <template v-else>
            <div
              class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal justify-center"
            >
              <h2 class="text-xl text-gray-900 py-16">No Transactions</h2>
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
  name: 'DashboardDetailProjectPage',
  components: {
    Transaction: () => import('~/components/Card/Transaction'),
  },
  layout: 'main',
  middleware: 'auth',
  async asyncData({ store, params }) {
    const campaign = await store.dispatch('campaign/GetCampaign', params.id)
    const transactions = await store.dispatch(
      'campaign/GetCampaignTransactions',
      { campaignId: params.id }
    )
    return { campaign, transactions }
  },
  data() {
    return {
      defaultImage: '',
      amount: 0,
    }
  },
  computed: {
    percentage() {
      return (this.campaign.current_amount / this.campaign.target_amount) * 100
    },
    avatarImage() {
      return `${this.$store.state.baseURL}/${this.campaign.user.image_url}`
    },
    campaignID() {
      return Number.parseInt(this.$route.params.id)
    },
    isLoggedIn() {
      return this.$store.state.auth.loggedIn
    },
    currentAmount() {
      return AmountIDR(this.campaign.current_amount)
    },
    targetAmount() {
      return AmountIDR(this.campaign.target_amount)
    },
  },
  mounted() {
    this.changeDefaultImage(
      `${this.$store.state.baseURL}/${this.campaign.image_url}`
    )
  },
  methods: {
    changeDefaultImage(url) {
      this.defaultImage = url
    },
    generateImage(path) {
      return `${this.$store.state.baseURL}/${path}`
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
