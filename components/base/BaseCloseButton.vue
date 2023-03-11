<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>();
</script>

<template>
  <figure @click="emit('close')">
    <img src="~~/assets/icons/xmark-solid.svg" />
  </figure>
</template>

<style scoped lang="scss">
  figure {
    @apply w-9 h-9 flex items-center justify-center rounded-sm;

    img {
      @apply w-7 h-7;
    }

    &:hover {
      @apply bg-gray-100 duration-100;
    }
  }
</style>
