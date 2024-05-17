<template>
  <div id="app" class="h-screen flex flex-col">
    <!-- Fixed Header -->
    <Header class="fixed top-0 left-0 right-0 z-10 bg-white shadow-md" />

    <!-- Main Content -->
    <div class="flex-1 flex pt-16">
      <!-- Adjust padding-top to the height of the header -->
      <!-- Sidebar -->
      <div class="bg-lime-500 w-64 p-4">
        <Sidebar />
      </div>

      <!-- Content Area -->
      <div class="flex-1 bg-red-500 p-4">
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
                  <tr v-for="book in books.data" :key="book.id" class="bg-white">
                    <td class="border border-gray-300 px-4 py-2">{{ book.name }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ book.author }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ book.publish_date }}</td>
                  </tr>
                </tbody>
              </table>
              <TailwindPagination
                v-if="books.data.length"
                :data="books"
                @pagination-change-page="getResults"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import { TailwindPagination } from 'laravel-vue-pagination'

import axios from 'axios'
import { ref, onMounted } from 'vue'

// Initialize books with the expected structure
const books = ref({
  data: [],
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
  links: {}
})

const getResults = async (page = 1) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8080/api/auth/books?page=${page}`)
    books.value = response.data.data // Ensure the response has the expected structure
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  getResults()
})
</script>
