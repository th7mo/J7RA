<script setup lang="ts">
  interface Props {
    text: string;
    gray?: boolean;
    green?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    gray: false,
    green: false,
  });
</script>

<template>
  <ul :class="gray ? 'gray' : green ? 'green' : 'blue'">
    <p>{{ text }}</p>
  </ul>
</template>

<style scoped lang="scss">
  ul {
    @apply flex items-center font-bold bg-blue-100 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem] max-w-fit;
  }

  p {
    @apply whitespace-nowrap;
  }

  .gray {
    @apply text-gray-500 bg-gray-200 bg-opacity-70;
  }

  .green {
    @apply text-green-600 bg-green-100;
  }
</style>
