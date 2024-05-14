<template>
  <div id="app">
    <Header />
  </div>
  <div class="grid grid-column-2 grid-flow-col gap-2 h-screen m-2">
    <div class="h-full max-h-full bg-lime-500 mt-20"></div>
    <div class="h-full max-h-full bg-red-500 mt-20 col-span-2 md:col-span-87">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-red-700">
        <div class="grid gap-4 mb-4">
          <div class="overflow-x-auto mt-">
            <table class="min-w-full border-collapse table-auto">
              <thead>
                <tr class="bg-gray-200">
                  <th class="border border-gray-300 px-4 py-2">Name</th>
                  <th class="border border-gray-300 px-4 py-2">Author</th>
                  <th class="border border-gray-300 px-4 py-2">Publish Date</th>
                </tr>
              </thead>
              <tbody>
                Loop through each book in the books array
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
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Header.vue'

import axios from 'axios'
import { ref, onMounted } from 'vue'

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
