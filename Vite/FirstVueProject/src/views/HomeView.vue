<script setup>
import TheWelcome from '../components/TheWelcome.vue'

// eslint-disable-next-line no-undef
let message = $ref('Hello World')

setTimeout(() => {
  message = 'I have been changed'
}, 2000)
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <input type="text" v-model="message" />
  </main>
</template>
