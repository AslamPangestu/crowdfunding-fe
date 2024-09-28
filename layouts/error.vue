<template>
  <div>
    <status-action
      title="Oops! Something wrong"
      image="/404-illustration.svg"
      :first-action="{ label: 'Go Back To Homepage', route: '/' }"
    >
      <template #content>
        <template v-if="error.statusCode === 404">
          The page that you request doesn't
          <br />
          exist at this moment
        </template>
      </template>
    </status-action>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  components: {
    StatusAction: () => import('~/components/StatusAction'),
  },
  props: ['error'], // you can set a custom layout for the error page
}
</script>
