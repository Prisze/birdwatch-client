<script setup>
import useAPI from '@/composables/useAPI'

const { posts } = useAPI()
</script>

<template>
    <div class="scontainer mx-autp p-4 w-3/4">
        <Suspense>
            <table class="min-w-full table-auto mx-auto">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-4 py-2">User</th>
                        <th class="px-4 py-2">Bird</th>
                        <th class="px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id" class="bg-white border-b">
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
.sub-wrapper {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>