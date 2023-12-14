import { ref } from 'vue'
import axios from 'axios'

const posts = ref([])
const currentPost = ref(null)
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

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

const useAPI = () => {
  return { pages, activePage, loading, pageSize, posts, getPosts, getPost, currentPost }
}

export default useAPI