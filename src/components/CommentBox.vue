<script setup>
import useAPI from '@/composables/useAPI'
const { currentPost, createComment, getPost } = useAPI()
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated, refresh } = useAuth()
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute();
const newComment = ref('')
async function submitComment(comment) {
      if (comment.trim()) {
        newComment.value = ''
        console.log(comment);
        await createComment(comment)
        await getPost(route.params.id)
      }
    };
</script>

<template>
    <div class="flex justify-center mt-10">
      <div class="w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Comments</h2>
  
        <div v-if="!currentPost">Loading...</div>
        <div v-else class="space-y-4">
          <div v-for="comment in currentPost.comments" :key="comment.id" class="border-b pb-4">
            <p class="font-bold">{{ comment.user.username }}</p>
            <p class="text-left">{{ comment.content }}</p>
          </div>
        </div>
  
        <div v-show="isAuthenticated" class="mt-6">
          <textarea v-model="newComment" class="w-full p-2 border rounded" placeholder="Write a comment..."></textarea>
          <button @click="submitComment(newComment)" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  </template>
  
