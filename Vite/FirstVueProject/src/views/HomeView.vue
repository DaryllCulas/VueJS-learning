<script>
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from 'vue'

export default {
  components: { TheWelcome },

  setup() {
    onMounted(() => {
      alert('Hi there')
    })

    let message = ref('Hello World')

    return {
      message
    }
  }
}
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <input type="text" v-model="message" />
  </main>
</template>
