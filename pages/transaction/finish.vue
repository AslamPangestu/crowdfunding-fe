<template>
  <div>
    <status-action
      title="Yeay! You are super"
      image="/funded-illustration.svg"
      multiple-action
      :first-action="{ label: 'Fund Other Project', route: '/projects' }"
      :second-action="{
        label: 'My Dashboard',
        route: '/profile/dashboard/projects',
      }"
    >
      <template #content>
        Your money has ben transferred
        <br />
        into company's account</template
      >
    </status-action>
  </div>
</template>

<script>
export default {
  name: 'SuccessTransactionPage',
  components: {
    StatusAction: () => import('~/components/StatusAction'),
  },
}
</script>
