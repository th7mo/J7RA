<script setup lang="ts">
  interface Props {
    text: string;
    gray?: boolean;
    green?: boolean;
    purple?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    gray: false,
    green: false,
  });
</script>

<template>
  <button
    :class="`flex items-center font-bold bg-blue-100 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem] max-w-fit ${
      gray ? 'text-gray-500 bg-gray-200/70' : ''
    } ${green ? 'text-green-600 bg-green-100' : ''} ${
      purple ? 'text-purple-600 bg-purple-100' : ''
    }`"
  >
    <span class="whitespace-nowrap">{{ text }}</span>
  </button>
</template>
