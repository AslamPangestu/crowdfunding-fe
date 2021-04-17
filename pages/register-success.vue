<template>
  <div>
    <status-action
      title="Welcome onboard!"
      image="/success-illustration.svg"
      :first-action="{ label: 'Start Explore', route: '/' }"
    >
      <template #content>
        Your account just registered
        <br />
        into our system
      </template>
    </status-action>
  </div>
</template>

<script>
export default {
  name: 'RegisterSuccessPage',
  components: {
    StatusAction: () => import('~/components/StatusAction'),
  },
}
</script>
