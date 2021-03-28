<template>
  <div class="project-page">
    <section class="project-header pt-5"></section>
    <section class="container project-container mx-auto -mt-56">
      <div class="flex mt-3">
        <div class="w-3/4 mr-6">
          <div class="bg-white p-3 mb-3 border border-gray-400 rounded-20">
            <figure class="item-image">
              <img
                :src="defaultImage"
                alt=""
                class="rounded-20 max-h-96 w-full object-contain"
              />
            </figure>
          </div>
          <div class="flex -mx-2">
            <div
              v-for="(image, id) in campaign.images"
              :key="id"
              class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
              <figure class="item-thumbnail cursor-pointer">
                <img
                  :src="generateImage(image.image_url)"
                  alt=""
                  class="rounded-20 w-full"
                  @click="changeDefaultImage(generateImage(image.image_url))"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="w-1/4">
          <div
            class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
            style="top: 15px"
          >
            <h3>Project Leader:</h3>

            <div class="flex mt-3">
              <div class="w-1/4">
                <img
                  :src="avatarImage"
                  alt=""
                  class="w-14 h-14 inline-block rounded-full object-cover"
                />
              </div>
              <div class="w-3/4 ml-5 mt-1">
                <div class="font-semibold text-xl text-gray-800">
                  {{ campaign.user.name }}
                </div>
                <div class="font-light text-md text-gray-400">
                  {{ campaign.backer_count }} backer
                </div>
              </div>
            </div>

            <h4 class="mt-5 font-semibold">What will you get:</h4>
            <ul class="list-check mt-3">
              <li v-for="(perk, id) in campaign.perks" :key="id">{{ perk }}</li>
            </ul>
            <template v-if="!isLoggedIn">
              <nuxt-link
                class="text-center mt-3 button-cta block w-full bg-orange-action hover:bg-green-action text-white font-medium px-6 py-2 text-md rounded-full"
                to="/login"
              >
                Sign In To Fund
              </nuxt-link>
            </template>
            <template v-else>
              <form method="post" @submit.prevent="fund">
                <input
                  v-model.number="amount"
                  type="number"
                  class="border border-gray-500 block w-full px-6 py-2 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
                  placeholder="Amount in Rp"
                />
                <button
                  class="text-center mt-3 button-cta block w-full bg-orange-action hover:bg-green-action text-white font-medium px-6 py-2 text-md rounded-full"
                  type="submit"
                >
                  Fund Now
                </button>
              </form>
            </template>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full md:w-3/4 mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">
            {{ campaign.title }}
          </h2>
          <p class="font-light text-xl mb-5">
            {{ campaign.short_description }}
          </p>

          <div class="relative progress-bar">
            <div
              class="overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6"
            >
              <div
                :style="`width: ${percentage}%`"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
              ></div>
            </div>
          </div>
          <div class="flex progress-info mb-6">
            <div class="text-2xl">{{ percentage }}%</div>
            <div class="ml-auto font-semibold text-2xl">
              Rp {{ new Intl.NumberFormat().format(campaign.target_amount) }}
            </div>
          </div>

          <p class="font-light text-xl mb-5">
            {{ campaign.description }}
          </p>
        </div>
        <div class="w-1/4 hidden md:block"></div>
      </div>
    </section>
    <template v-if="!isLoggedIn">
      <div class="cta-clip"></div>
      <CallToAction />
    </template>
  </div>
</template>

<script>
export default {
  name: 'DetailProjectPage',
  layout: 'main',
  async asyncData({ store, params }) {
    const campaign = await store.dispatch('campaign/GetCampaign', params.id)
    return { campaign }
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
    async fund() {
      const payload = {
        campaign_id: this.campaignID,
        amount: this.amount,
      }
      const res = await this.$store.dispatch('transaction/Fund', payload)
      window.location = res.payment_url
    },
  },
}
</script>
