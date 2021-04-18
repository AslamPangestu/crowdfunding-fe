<template>
  <div
    :to="`/dashboard/projects/${id}`"
    class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal"
  >
    <figure>
      <img :src="image" alt="" class="rounded w-40 h-40 object-cover" />
    </figure>
    <div class="px-8 py-4">
      <div class="text-gray-900 font-bold text-xl mb-1">
        [{{ trxCode }}]{{ title }}
      </div>
      <p class="text-sm text-gray-600 flex items-center">
        {{ amountFormatted }} &middot; {{ dateFormatted }} &middot; {{ status }}
      </p>
    </div>
  </div>
</template>

<script>
import { AmountIDR, DateLong } from '~/utils/formatter'
export default {
  name: 'TransactionComponent',
  props: {
    id: { type: Number, default: 0 },
    imageUrl: { type: String, default: '' },
    title: { type: String, default: '' },
    status: { type: String, default: '' },
    trxDate: { type: String, default: '' },
    trxCode: { type: String, default: '' },
    amount: { type: Number, default: 0 },
  },
  computed: {
    percentage() {
      return (this.currentAmount / this.targetAmount) * 100
    },
    image() {
      return `${this.$store.state.baseURL}/${this.imageUrl}`
    },
    amountFormatted() {
      return AmountIDR(this.amount)
    },
    dateFormatted() {
      return DateLong(this.trxDate)
    },
  },
}
</script>
