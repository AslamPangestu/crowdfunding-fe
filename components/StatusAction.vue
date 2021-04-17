<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto mt-6 mb-8">
        <img :src="image" alt="" class="w-64 h-64" />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">{{ title }}</h2>
      <p class="text-center font-light">
        <slot name="content" />
      </p>
      <div class="flex justify-center items-center my-4">
        <button
          class="block w-64 bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-2 text-md rounded-full"
          @click="$router.replace({ path: firstAction.route })"
        >
          {{ firstAction.label }}
        </button>
      </div>
      <div v-if="multipleAction" class="flex justify-center items-center">
        <button
          class="block w-64 bg-transparent border border-gray-500 text-gray-500 hover:bg-green-action hover:border-green-action hover:text-white font-light px-6 py-2 text-md rounded-full"
          @click="$router.replace({ path: secondAction.route })"
        >
          {{ secondAction.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusActionComponent',
  props: {
    multipleAction: { type: Boolean, default: false },
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    firstAction: { type: Object, default: () => ({ label: '', route: '' }) },
    secondAction: { type: Object, default: () => ({ label: '', route: '' }) },
  },
}
</script>
