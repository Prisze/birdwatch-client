<script setup>
import useAPI from '@/composables/useAPI'

const { posts } = useAPI()
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
  const route = useRoute()
</script>

<template>
    <div class="container mx-auto p-4 w-3/4">
        <Suspense>
            <table class="min-w-full table-auto mx-auto">
                <thead class="bg-blue-100">
                    <tr>
                        <th class="px-4 py-2 ">User</th>
                        <th class="px-4 py-2">Bird</th>
                        <th class="px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" 
                        :key="post.id" 
                        class="bg-blue-200 border-b hover:bg-light-blue cursor-pointer"
                        @click="router.push(`/post/${post.id}`);">
                        <td class="px-4 py-2">{{ post.user.username }}</td>
                        <td class="px-4 py-2">{{ post.bird.common_name }}</td>
                        <td class="px-4 py-2">{{ (new Date(post.created_at)).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        }) }}</td>
                    </tr>
                </tbody>
            </table>
        </Suspense>
    </div>
</template>

<style scoped lang="postcss">
.container {
    @apply mx-auto p-4 w-3/4;
}

.hover\:bg-light-blue:hover {
    background-color: #fafafa; /* Adjust the color code as needed */
}

.cursor-pointer {
    cursor: pointer;
}
.sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>