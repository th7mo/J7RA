<script setup lang="ts">
  interface Props {
    text: string;
  }

  defineProps<Props>();
</script>

<template>
  <ul>
    <p>{{ text }}</p>
  </ul>
</template>

<style scoped lang="scss">
  ul {
    @apply flex items-center font-bold bg-blue-200 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem] max-w-fit;
  }

  p {
    @apply whitespace-nowrap;
  }
</style>
