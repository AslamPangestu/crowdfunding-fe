<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto mt-6 mb-8">
        <img src="/404-illustration.svg" alt="" class="w-full" />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">
        Opps! Something wrong
      </h2>
      <p v-if="error.statusCode === 404" class="text-center font-light">
        The page thate you request doesn't
        <br />
        exist at this moment
      </p>
      <p v-else class="text-center font-light">An error occured</p>
      <div class="mb-4 mt-6">
        <div class="mb-3">
          <button
            class="block w-full bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-4 text-lg rounded-full"
            @click="$router.push({ path: '/' })"
          >
            Back To Homepage
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
