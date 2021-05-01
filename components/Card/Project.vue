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
      <progress-bar class="pt-4" :value="percentage" />
      <div class="flex progress-info">
        <div>{{ percentage }}%</div>
        <div class="ml-auto font-semibold">{{ amount }}</div>
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
import { AmountIDR } from '~/utils/formatter'
/* eslint-disable vue/prop-name-casing */
export default {
  name: 'ProjectItemComponent',
  components: {
    ProgressBar: () => import('~/components/ProgressBar'),
  },
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
      return this.imageUrl
    },
    amount() {
      return AmountIDR(this.targetAmount)
    },
  },
}
</script>
