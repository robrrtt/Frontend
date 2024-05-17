<template>
    <ol class="flex justify-center gap-1 text-xs font-medium">
        <!-- Previous page button -->
        <li>
            <a href="#" @click.prevent="changePage(currentPage - 1)"
                class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span class="sr-only">Prev Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </a>
        </li>

        <!-- Pagination items -->
        <li v-for="pageNumber in totalPages" :key="pageNumber">
            <a href="#" @click.prevent="changePage(pageNumber)"
                :class="{
                'block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900': pageNumber !== currentPage,
                'block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white': pageNumber === currentPage
            }">
                {{ pageNumber }}
            </a>
        </li>

        <!-- Next page button -->
        <li>
            <a href="#" @click.prevent="changePage(currentPage + 1)"
                class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span class="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </a>
        </li>
    </ol>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
})

const emit = defineEmit(['pagination-change-page'])

const changePage = (page) => {
    emit('pagination-change-page', page)
}
</script>