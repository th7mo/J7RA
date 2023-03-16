<script setup lang="ts">
  defineProps<{
    label: string;
    transparent?: boolean;
  }>();
</script>

<template>
  <button
    :class="`px-2 py-1 rounded-md disabled:cursor-not-allowed
      ${
        transparent
          ? 'bg-transparent text-gray-700 hover:bg-transparent hover:underline disabled:text-gray-300 disabled:hover:no-underline'
          : 'bg-blue-600 text-white hover:bg-blue-500 disabled:bg-gray-300'
      }`"
  >
    {{ label }}
  </button>
</template>
