<template>
  <section class="menu-section w-1/5">
    <!-- TODO: Create Accordion -->
    <ul class="text-gray-700 shadow">
      <nuxt-link to="/dashboard/account-settings">
        <li
          :class="`bg-white ${activeMenu(
            'Account Settings'
          )} border-t py-2 px-4 block whitespace-no-wrap`"
        >
          Account Settings
        </li>
      </nuxt-link>
      <nuxt-link to="/dashboard/projects">
        <li
          :class="`bg-white ${activeMenu(
            'Projects'
          )} border-t py-2 px-4 block whitespace-no-wrap`"
        >
          Projects
        </li>
      </nuxt-link>
      <nuxt-link to="/dashboard/transactions">
        <li
          :class="`bg-white ${activeMenu(
            'Transactions'
          )} border-t py-2 px-4 block whitespace-no-wrap`"
        >
          Transactions
        </li>
      </nuxt-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SidebarComponent',
  mounted() {
    this.activeMenu()
  },
  methods: {
    activeMenu(name) {
      const activeStyle = 'bg-gray-100 text-orange-action'
      const inactiveStyle =
        'cursor-pointer hover:bg-gray-100 hover:text-orange-action'
      if (name === 'Account Settings') {
        return this.$route.name.includes('account-settings')
          ? activeStyle
          : inactiveStyle
      }
      if (name === 'Projects') {
        return this.$route.name.includes('projects')
          ? activeStyle
          : inactiveStyle
      }
      if (name === 'Transactions') {
        return this.$route.name.includes('transactions')
          ? activeStyle
          : inactiveStyle
      }
    },
  },
}
</script>
