import { ref } from 'vue'
import axios from 'axios'

const posts = ref([])
const currentPost = ref(null)
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

import {useAuth} from '@/composables/useAuth'
const { user } = useAuth()

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})


const getPosts = async () => {
    loading.value = true
    const { data, headers } = await api.get('/api/posts', {})
    posts.value = data
    console.log(data)
    loading.value = false
  }

const getPost = async (id) => {
  loading.value = true
  const { data, headers } = await api.get(`/api/posts/${id}`, {})
  currentPost.value = data
  console.log(data)
  loading.value = false
}

const createComment = async (content) => {
  loading.value = true
  let token = await user.value.getIdToken();
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data, headers } = await api.post('/api/comments/', {post_id: currentPost.value.id, content: content})
  console.log(data)
  console.log(headers)
  loading.value = false
}

const useAPI = () => {
  return { api, pages, activePage, loading, pageSize, posts, getPosts, getPost, currentPost, createComment }
}

export default useAPI