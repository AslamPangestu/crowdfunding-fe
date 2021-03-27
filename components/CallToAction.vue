<template>
  <section class="call-to-action bg-purple-progress pt-64 pb-10">
    <div class="container mx-auto">
      <div class="w-full text-center">
        <h1 class="text-5xl text-white font-semibold">
          Easy way to funding
          <br />
          best idea and innovation
        </h1>
        <button
          class="inline-block bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-2 mt-8 text-md rounded-full w-56"
          @click="$router.push({ path: '/register' })"
        >
          Getting Start
        </button>
      </div>
    </div>
  </section>
</template>
