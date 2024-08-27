<script>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

export default {
  components: { TheWelcome },

  setup() {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ count }}</p>
    <button @click="increment"></button>
  </main>
</template>
