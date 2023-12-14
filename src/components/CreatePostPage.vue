<script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  import useAPI from '@/composables/useAPI'
  const { birds, getBirds, createPost } = useAPI()

  const router = useRouter()
  const route = useRoute()

  const image_url = ref('')
  const description = ref('')
  const selectedBird = ref('')
  const latitude = ref('')
  const longitude = ref('')

  const add_post = async () => {
    await createPost(selectedBird.value, parseFloat(longitude.value), parseFloat(latitude.value), description.value, image_url.value)
    router.push({ name: 'Home' })
  }

  onMounted(async () => {
    await getBirds()
  })
</script>

<template>
  <form class="post-form" @submit.prevent="add_post">
    Image URL
    <input v-model="image_url" type="text" placeholder="Image URL" />
    Description
    <input v-model="description" type="text" placeholder="Description" />
    Bird
    <select v-if="birds.length" v-model="selectedBird">
      <option v-for="bird in birds" :key="bird.id" :value="bird.id"> {{ bird.common_name }}</option>
    </select>
    Latitude
    <input v-model="latitude" type="text" placeholder="Latitude" />
    Longitude
    <input v-model="longitude" type="text" placeholder="Longitude" />
    <button type="submit" class="bg-green-500 px-4 py-2">Create Post</button>
  </form>
</template>

<style scoped lang="postcss">
  .post-form {
    @apply mx-auto mt-4 flex max-w-md flex-col gap-4 rounded-md bg-orange-200 p-8 shadow-lg;
    & input {
      @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
    @apply mx-auto mt-4 flex max-w-md flex-col gap-4 rounded-md bg-orange-200 p-8 shadow-lg;
    & select {
      @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
  }
</style>
