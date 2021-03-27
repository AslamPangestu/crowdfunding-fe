<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-full lg:w-1/3 px-10 lg:px-0">
      <div class="flex justify-center items-center mx-auto mt-6 mb-8">
        <img src="/success-illustration.svg" alt="" class="w-64 h-64" />
      </div>
      <h2 class="font-medium mb-3 text-3xl text-center">Welcome onboard!</h2>
      <p class="text-center font-light">
        Your account just registered
        <br />
        into our system
      </p>
      <div class="flex justify-center items-center mb-4 mt-6">
        <button
          class="block w-64 bg-orange-action hover:bg-green-action text-white font-semibold px-6 py-2 text-md rounded-full"
          @click="$router.push({ path: '/' })"
        >
          Start Explore
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterSuccessPage',
  layout: 'success',
}
</script>
