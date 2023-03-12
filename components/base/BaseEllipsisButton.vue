<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'clicked'): void;
  }>();
</script>

<template>
  <figure @click="emit('clicked')">
    <img src="~~/assets/icons/ellipsis-solid.svg" />
  </figure>
</template>

<style scoped lang="scss">
  figure {
    @apply w-6 h-6 flex items-center justify-center rounded-sm;

    img {
      @apply w-5 h-5;
    }

    &:hover {
      @apply bg-gray-100 duration-100;
    }
  }
</style>
