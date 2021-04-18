<template>
  <section class="menu-section w-1/5">
    <!-- TODO: Create Accordion -->
    <ul class="text-gray-700 shadow">
      <nuxt-link to="/profile">
        <li
          class="cursor-pointer bg-white hover:bg-gray-100 border-t hover:text-orange-action py-2 px-4 block whitespace-no-wrap"
        >
          Account Settings
        </li>
      </nuxt-link>
      <nuxt-link to="/dashboard/projects">
        <li
          class="cursor-pointer bg-white hover:bg-gray-100 hover:text-orange-action border-t py-2 px-4 block whitespace-no-wrap"
        >
          Projects
        </li>
      </nuxt-link>
      <nuxt-link to="/dashboard/transactions">
        <li
          class="cursor-pointer bg-white hover:bg-gray-100 hover:text-orange-action border-t py-2 px-4 block whitespace-no-wrap"
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
}
</script>
