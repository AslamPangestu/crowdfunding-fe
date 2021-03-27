<template>
  <div class="bg-white p-5">
    <figure class="item-image">
      <img
        :src="image"
        alt=""
        class="rounded-20 w-full max-h-64 object-cover"
      />
    </figure>
    <div class="item-meta">
      <h4 class="text-3xl font-medium text-gray-900 mt-5">
        {{ title }}
      </h4>
      <p class="text-md font-light text-gray-900">
        {{ shortDesc }}
      </p>
      <div class="relative pt-4 progress-bar">
        <div
          class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
        >
          <div
            :style="`width: ${percentage}%`"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
          ></div>
        </div>
      </div>
      <div class="flex progress-info">
        <div>{{ percentage }}%</div>
        <div class="ml-auto font-semibold">
          Rp {{ new Intl.NumberFormat().format(targetAmount) }}
        </div>
      </div>
    </div>
    <button
      to="/projects/1"
      class="text-center mt-5 button-cta block w-full bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-2 text-md rounded-full"
      @click="
        $router.push({
          name: 'projects-id',
          params: { id: id },
        })
      "
    >
      Fund Now
    </button>
  </div>
</template>

<script>
/* eslint-disable vue/prop-name-casing */
export default {
  name: 'ProjectItemComponent',
  props: {
    id: { type: Number, default: 0 },
    imageUrl: { type: String, default: '' },
    title: { type: String, default: '' },
    shortDesc: { type: String, default: '' },
    currentAmount: { type: Number, default: 0 },
    targetAmount: { type: Number, default: 0 },
  },
  computed: {
    percentage() {
      return (this.currentAmount / this.targetAmount) * 100
    },
    image() {
      return `${this.$store.state.baseURL}/${this.imageUrl}`
    },
  },
}
</script>
