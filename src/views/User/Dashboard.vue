<template>
  <div>
    <h1 class="">DashboardPage</h1>
    <button
      @click="logout"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute"
    >
      Logout
    </button>
  </div>

  <Sidebar />
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-red-700">
      <div class="grid gap-4 mb-4">
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse table-auto">
            <thead>
              <tr class="bg-gray-200">
                <th class="border border-gray-300 px-4 py-2">Name</th>
                <th class="border border-gray-300 px-4 py-2">Author</th>
                <th class="border border-gray-300 px-4 py-2">Publish Date</th>
              </tr>
            </thead>
            <tbody>
              <!-- Loop through each book in the books array -->
              <tr v-for="book in books.data" :key="book.id" class="bg-white">
                <td class="border border-gray-300 px-4 py-2">{{ book.name }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ book.author }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ book.publish_date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const logout = async () => {
  try {
    await axios.post(
      'http://127.0.0.1:8080/api/auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    localStorage.removeItem('token')
    router.push({ name: 'loginpage' })
  } catch (error) {
    console.error('Logout error:', error.response.data)
  }
}

const books = ref({ data: [] }) // Initialize as an object with a 'data' property

const fetchBooks = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8080/api/auth/books')
    books.value = response.data // Assign the response data directly to books
    console.log('Books:', books.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchBooks()
})
</script>
