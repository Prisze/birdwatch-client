import { ref } from 'vue'
import axios from 'axios'

const posts = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})



const getEmployees = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/employees', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  employees.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const getPosts = async () => {
    loading.value = true
    const { data, headers } = await api.get('/api/posts', {})
    posts.value = data
    console.log(data)
    loading.value = false
  }

const getDepartment = async (departmentId) => {
  const { data } = await api.get(`/api/departments/${departmentId}`)
  return data
}

const useAPI = () => {
  return { pages, activePage, loading, pageSize, posts, getPosts }
}

export default useAPI