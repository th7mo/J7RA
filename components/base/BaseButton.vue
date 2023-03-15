<script setup lang="ts">
  defineProps<{
    label: string;
    transparent?: boolean;
    disabled?: boolean;
  }>();
</script>

<template>
  <button
    :class="`
      px-2 py-1 rounded-md
       bg-blue-600 text-white hover:bg-blue-500 
       disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:no-underline
      ${
        transparent
          ? 'bg-transparent text-gray-700 hover:underline hover:bg-transparent disabled:text-gray-300'
          : ''
      }`"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>
