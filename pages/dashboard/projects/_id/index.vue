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
                <!-- <ul v-if="havePerks" class="list-disc ml-5">
                  <li v-for="(perk, id) in campaign.perks" :key="id">
                    {{ perk }}
                  </li>
                </ul> -->
                <!-- <p v-else>No Perks</p> -->
                <p>No Perks</p>
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
          <div class="w-2/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">Gallery</h3>
          </div>
          <div class="w-2/4 text-right">
            <input
              ref="file"
              type="file"
              class="border p-1 rounded overflow-hidden"
              @change="selectFile"
            />
            <button
              class="bg-green-action hover:bg-orange-action text-white font-semibold py-2 px-4 text-md text-center rounded w-32"
              @click="upload"
            >
              Upload
            </button>
          </div>
        </div>
        <div v-if="haveGalleries" class="grid grid-cols-4 gap-4 -mx-2">
          <div
            v-for="(image, idx) in campaign.images"
            :key="idx"
            class="relative w-full bg-white m-2 p-2 border border-gray-400 rounded"
          >
            <figure class="item-thumbnail">
              <img :src="image.image_url" alt="" class="rounded w-full" />
            </figure>
          </div>
        </div>
        <div
          v-else
          class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal justify-center"
        >
          <h2 class="text-xl text-gray-900 py-16">No Images</h2>
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
          <template v-if="haveTransactions">
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
      selectedFiles: undefined,
    }
  },
  computed: {
    percentage() {
      return (this.campaign.current_amount / this.campaign.target_amount) * 100
    },
    campaignID() {
      return Number.parseInt(this.$route.params.id)
    },
    currentAmount() {
      return AmountIDR(this.campaign.current_amount)
    },
    targetAmount() {
      return AmountIDR(this.campaign.target_amount)
    },
    havePerks() {
      return this.campaign.perks.length !== 0
    },
    haveTransactions() {
      return this.transactions.length !== 0
    },
    haveGalleries() {
      return this.campaign.images.length !== 0
    },
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files
    },
    async getCampaign() {
      const campaign = await this.$store.dispatch(
        'campaign/GetCampaign',
        this.campaignID
      )
      this.campaign = campaign
    },
    async upload() {
      const form = new FormData()
      form.append('campaign_id', this.campaignID)
      form.append('file', this.selectedFiles.item(0))
      form.append('is_primary', true)
      await this.$store.dispatch('campaign/UploadCampaignImages', form)
      this.getCampaign()
      this.selectedFiles = undefined
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
