<script setup>
  import { onMounted } from 'vue'

  import useAPI from '@/composables/useAPI'

  import MainTable from '@/components/MainTable.vue'

  const { getPosts, loading } = useAPI()

  onMounted(async () => {
    await getPosts()
  })
</script>

<template>
  <p v-if="loading">Loading...</p>
  <div v-else class="wrapper">
    <MainTable />
  </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
  }
</style>