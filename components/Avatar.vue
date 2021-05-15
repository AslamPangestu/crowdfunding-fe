<template>
  <div class="flex justify-center items-center mx-auto mb-4 w-40">
    <div class="relative">
      <div class="cursor-pointer" @click="$refs.file.click()">
        <img
          :src="url"
          alt=""
          class="h-40 w-40 rounded-full border-white border-4 object-cover"
        />
        <img
          src="/icon-avatar-add.svg"
          alt=""
          class="h-10 w-10 absolute right-0 bottom-0 pb-2"
        />
        <input
          id="file"
          ref="file"
          type="file"
          name="file"
          style="display: none"
          accept="image/*"
          @change="onFileChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  props: {
    defaultImage: { type: String, default: '' },
  },
  data() {
    return {
      url: '/avatar.jpg',
    }
  },
  mounted() {
    if (this.defaultImage !== '') {
      this.url = this.defaultImage
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
      this.$emit('selected', file)
    },
  },
}
</script>
