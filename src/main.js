// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* index.css */

// Import Tailwind CSS
import 'tailwindcss/tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
