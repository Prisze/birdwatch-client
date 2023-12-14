<script setup>
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import useAPI from '@/composables/useAPI'

    import PostContent from '@/components/PostContent.vue'

    const { getPost, loading } = useAPI()

    onMounted(async () => {
        const route = useRoute();
        await getPost(route.params.id)
    })
</script>

<template>
    <p v-if="loading">Loading...</p>
    <div v-else class="wrapper">
        <PostContent />
    </div>
</template>

<style scoped lang="postcss">
  .wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
  }
</style>