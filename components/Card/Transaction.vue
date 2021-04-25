<template>
  <div
    class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal"
  >
    <figure v-if="image">
      <img :src="image" alt="" class="rounded w-40 h-40 object-cover" />
    </figure>
    <div class="px-8 py-4">
      <div class="text-gray-900 font-bold text-xl mb-1">
        {{ completeTitle }}
      </div>
      <p v-if="status" class="text-sm text-gray-600 flex items-center">
        {{ amountFormatted }} &middot; {{ dateFormatted }} &middot; {{ status }}
      </p>
      <p v-else class="text-sm text-gray-600 flex items-center">
        {{ amountFormatted }} &middot; {{ dateFormatted }}
      </p>
    </div>
  </div>
</template>

<script>
import { AmountIDR, DateLong } from '~/utils/formatter'
export default {
  name: 'TransactionComponent',
  props: {
    imageUrl: { type: String, default: '' },
    title: { type: String, default: '' },
    status: { type: String, default: '' },
    trxDate: { type: String, default: '' },
    trxCode: { type: String, default: '' },
    amount: { type: Number, default: 0 },
  },
  computed: {
    completeTitle() {
      if (this.trxCode) {
        return `[${this.trxCode}] ${this.title}`
      }
      return this.title
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
