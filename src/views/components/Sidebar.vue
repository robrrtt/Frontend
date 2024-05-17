<template>
  <div id="app" class="relative">
    <!-- Burger Menu Icon 
    <svg
      v-if="!asideOpen"
      @click="toggleSide"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-8 h-8 cursor-pointer absolute top-4 left-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
-->
    <!-- Sidebar -->
    <div v-if="asideOpen" class="fixed inset-y-0 left-0 bg-lime-500 w-64 p-4">
      <button @click="toggleSide" class="w-full p-4 text-lg text-left">Close &times;</button>
      <a href="#" class="block w-full p-4 text-left hover:bg-gray-100">Link 1</a>
      <a href="#" class="block w-full p-4 text-left hover:bg-gray-100">Link 2</a>
      <a href="#" class="block w-full p-4 text-left hover:bg-gray-100">Link 3</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const asideOpen = ref(true)

const toggleSide = () => {
  asideOpen.value = !asideOpen.value
}
</script>
