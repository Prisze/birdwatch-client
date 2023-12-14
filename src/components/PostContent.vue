<script setup>
import useAPI from '@/composables/useAPI'

const { currentPost, loading } = useAPI()
</script>

<template>
    <div>
        <Suspense>
        <div v-if="!currentPost">Loading...</div>
        <div v-else class="flex flex-col justify-center items-center h-screen">
            <img :src="currentPost.image_url" alt="Image" class="mb-4" style="max-width: 30%; height: auto"/>
            <h1 class="text-black font-bold text-xl mb-2">{{ currentPost.bird.common_name }}</h1>
            <h2 class="text-gray-600 italic mb-4">{{ currentPost.bird.scientific_name }}</h2>
            <p class="text-justify max-w-md">{{ currentPost.description }}</p>
        </div>
        </Suspense>
    </div>
</template>

<style scoped lang="postcss">
.sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>