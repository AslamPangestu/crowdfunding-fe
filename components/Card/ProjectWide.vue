<template>
  <nuxt-link
    :to="`/dashboard/projects/${id}`"
    class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal"
  >
    <figure>
      <img :src="imageUrl" alt="" class="rounded w-40 h-40 object-cover" />
    </figure>
    <div class="px-8 py-4">
      <div class="text-gray-900 font-bold text-xl mb-1">
        {{ title }}
      </div>
      <p class="text-sm text-gray-600 flex items-center">
        {{ amount }} &middot; {{ percentage }}%
      </p>
      <p class="text-gray-700 text-base">
        {{ shortDesc }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
import { AmountIDR } from '~/utils/formatter'
export default {
  name: 'ProjectWideComponent',
  props: {
    id: { type: Number, default: 0 },
    imageUrl: { type: String, default: '' },
    title: { type: String, default: '' },
    shortDesc: { type: String, default: '' },
    currentAmount: { type: Number, default: 0 },
    targetAmount: { type: Number, default: 0 },
  },
  computed: {
    percentage() {
      return (this.currentAmount / this.targetAmount) * 100
    },
    amount() {
      return AmountIDR(this.targetAmount)
    },
  },
}
</script>
