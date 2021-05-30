<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white px-4 py-3 flex items-center justify-center sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
      <div
        v-if="pagination.hasPrev"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 rounded-10"
        @click="onClickPage('prev')"
      >
        Previous
      </div>
      <div
        v-if="pagination.hasNext"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 rounded-10"
        @click="onClickPage('next')"
      >
        Next
      </div>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <div
            v-if="pagination.hasPrev"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-10"
            @click="onClickPage('prev')"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            v-for="page in pagination.pages"
            :key="page"
            :class="`${activeClass(
              page
            )} bg-white relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-10`"
            @click="onClickPage(page)"
          >
            {{ page }}
          </div>
          <div
            v-if="pagination.hasNext"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-10"
            @click="onClickPage('next')"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  computed: {
    pagination() {
      return this.$store.getters['ui/GetPagination']
    },
  },
  methods: {
    activeClass(selectPage) {
      const page = this.$route.query.page || '1'
      if (page === selectPage.toString()) {
        return 'z-10 border-orange-action text-orange-action cursor-not-allowed'
      }
      return 'border-gray-300 text-gray-500 hover:text-green-action hover:border-green-action cursor-pointer'
    },
    onClickPage(selectPage) {
      let page = selectPage
      if (selectPage === 'next') {
        page = this.pagination.nextPage
      } else if (selectPage === 'prev') {
        page = this.pagination.prevPage
      }
      this.$router.push(`${this.$route.path}?page=${page}`)
    },
  },
}
</script>
