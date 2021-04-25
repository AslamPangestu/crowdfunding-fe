<template>
  <div class="project-page">
    <section class="dashboard-header pt-5"></section>
    <div class="flex flex-row">
      <Sidebar />
      <section class="content-section w-4/5">
        <div class="flex justify-between items-center mb-8">
          <div class="w-3/4 mr-6 mt-4">
            <h2 class="text-4xl text-gray-900 font-medium">Transactions</h2>
          </div>
        </div>
        <div class="block">
          <template v-if="!transactionsEmpty">
            <div
              v-for="transaction in transactions"
              :key="transaction.id"
              class="w-full lg:max-w-full lg:flex mb-4"
            >
              <transaction
                :image-url="transaction.campaign.image_url"
                :title="transaction.campaign.title"
                :trx-date="transaction.created_at"
                :trx-code="transaction.trx_code"
                :status="transaction.status"
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
  name: 'DashboardTransactionsPages',
  components: {
    Transaction: () => import('~/components/Card/Transaction'),
  },
  layout: 'main',
  middleware: 'auth',
  async asyncData({ store }) {
    const transactions = await store.dispatch('transaction/GetTransactions')
    return { transactions }
  },
  computed: {
    transactionsEmpty() {
      return this.transactions && this.transactions.length === 0
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
