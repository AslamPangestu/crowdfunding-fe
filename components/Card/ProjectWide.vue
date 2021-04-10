<template>
  <div
    class="flex flex-row w-full border border-gray-400 bg-white rounded leading-normal"
  >
    <figure>
      <img
        src="/project-image.jpg"
        alt=""
        class="rounded w-40 h-40 object-cover"
      />
    </figure>
    <div class="px-8 py-6">
      <div class="text-gray-900 font-bold text-xl mb-1">
        Cari Uang Buat Gunpla
      </div>
      <p class="text-sm text-gray-600 flex items-center">
        Rp. 200.000.000 &middot; 12 September 2020
      </p>
      <div>
        <button
          class="bg-green-action hover:bg-orange-action text-white font-semibold py-2 px-4 mt-8 text-md rounded w-32"
          @click="$router.push({ path: '/register' })"
        >
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectWideComponent',
}
</script>
