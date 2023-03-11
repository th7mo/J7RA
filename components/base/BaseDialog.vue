<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div @click="emit('close')">
    <section @click.stop="">
      <slot></slot>
    </section>
  </div>
</template>

<style scoped lang="scss">
  div {
    @apply fixed top-0 bottom-0 left-0 right-0 bg-opacity-20 bg-black flex justify-center items-center;
  }

  section {
    @apply bg-white p-10 rounded-sm;
  }
</style>
