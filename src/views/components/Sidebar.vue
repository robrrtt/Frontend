<template>
  <div class="w-64 h-full bg-white border-r border-gray-200">
    <button @click="toggleSide" class="w-full p-4 text-lg text-left">Close &times;</button>
    <a href="#" class="block w-full p-4 text-left hover:bg-gray-100">Link 1</a>
    <a href="#" class="block w-full p-4 text-left hover:bg-gray-100">Link 2</a>
    <a href="#" class="block w-full p-4 text-left hover:bg-gray-100">Link 3</a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const asideOpen = ref(true)

const toggleSide = () => {
  asideOpen.value = !asideOpen.value
}
</script>
