<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  email: '',
  password: '',
  remember: false,
  error: null
})

const submit = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8080/api/auth/login', {
      email: form.value.email,
      password: form.value.password,
      remember: form.value.remember
    })
    // Handle successful login response
    console.log('Login successful:', response.data)
    // Store token in local storage
    localStorage.setItem('token', response.data.token)
    // Redirect to dashboard
    router.push({ name: 'dashboard' })
  } catch (error) {
    // Handle login error
    console.error('Login error:', error.response.data)
    form.value.error = 'Login failed. Please check your credentials.'
  }
}

// Check if the token exists in localStorage
if (localStorage.getItem('token')) {
  // Redirect to dashboard if token exists
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <form @submit.prevent="submit">
    <div v-if="form.error" class="error">{{ form.error }}</div>
    <div>
      <label>Email:</label>
      <input type="email" v-model="form.email" required />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="form.password" required />
    </div>
    <div>
      <label>
        <input type="checkbox" v-model="form.remember" />
        Remember me
      </label>
    </div>
    <button type="submit">Log in</button>
  </form>
</template>

<style>
.error {
  color: red;
}
</style>
