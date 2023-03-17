<script setup lang="ts">
  defineProps<{
    dropdown?: boolean;
    blue?: boolean;
    gray?: boolean;
    purple?: boolean;
    green?: boolean;
  }>();
</script>

<template>
  <span
    class="font-bold text-[0.8rem] rounded flex px-[6px] py-[2px] w-fit border-transparent h-fit select-none"
    :class="`${blue ? 'bg-blue-100 text-blue-600 hover:border-blue-600' : ''} ${
      gray ? 'text-gray-500 bg-gray-200/70 hover:border-gray-500' : ''
    } ${green ? 'text-green-600 bg-green-100 hover:border-green-600' : ''} ${
      purple ? 'text-purple-600 bg-purple-100 hover:border-purple-600' : ''
    } ${dropdown ? 'border' : ''}`"
  >
    <slot></slot>
  </span>
</template>
