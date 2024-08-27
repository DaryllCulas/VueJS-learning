<script>
import { useFlash } from '@/composables/useFlash'

export default {
  setup() {
    let { flash } = useFlash()

    return { flash }
  }
}
</script>

<template>
  <main>
    <button @click="flash('Home', 'This is home')">Click Me</button>
  </main>
</template>
