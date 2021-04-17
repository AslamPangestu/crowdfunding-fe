<template>
  <div>
    <status-action
      title="Transaction unfinished"
      image="/funded-illustration.svg"
      :first-action="{ label: 'Fund Other Project', route: '/projects' }"
    >
      <template #content>Your transaction is cancelled</template>
    </status-action>
  </div>
</template>

<script>
export default {
  name: 'CancelTransactionPage',
  components: {
    StatusAction: () => import('~/components/StatusAction'),
  },
}
</script>
