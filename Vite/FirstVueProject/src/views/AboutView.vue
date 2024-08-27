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
  <p>
    <button @click="flash('About', 'This is about')">Click Me</button>
  </p>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
