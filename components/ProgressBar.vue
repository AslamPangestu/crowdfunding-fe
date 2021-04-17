<template>
  <div class="relative progress-bar">
    <div
      class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
    >
      <div
        :style="`width: ${value}%`"
        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBarComponent',
  props: {
    value: { type: Number, default: 0 },
  },
}
</script>
