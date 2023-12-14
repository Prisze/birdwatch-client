import { ref } from 'vue'
import axios from 'axios'

const posts = ref([])
const currentPost = ref(null)
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)
const birds = ref([])

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

  const getBirds = async () => {
    const { data, headers } = await api.get('/api/birds', {})
    birds.value = data
    console.log(data)
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

const createPost = async (bird_id, longitude, latitude, description, image_url) => {
  let token = await user.value.getIdToken();
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data, headers } = await api.post('/api/posts/', {bird_id, longitude, latitude, description, image_url})
  console.log(data)
  console.log(headers)
}

const useAPI = () => {
  return { api, pages, activePage, loading, pageSize, posts, getPosts, getPost, currentPost, createComment, birds, getBirds, createPost }
}

export default useAPI