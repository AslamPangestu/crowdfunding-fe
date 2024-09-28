<template>
  <div>
    <status-action
      title="Oops, Something wrong!"
      image="/funded-illustration.svg"
      :first-action="{ label: 'Fund Other Project', route: '/projects' }"
    >
      <template #content>
        An error occurred when processing your transaction. <br />
        Please try again later
      </template>
    </status-action>
  </div>
</template>

<script>
export default {
  name: 'FailedTransactionPage',
  components: {
    StatusAction: () => import('~/components/StatusAction'),
  },
}
</script>
