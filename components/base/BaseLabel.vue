<script setup lang="ts">
  defineProps<{
    gray?: boolean;
    purple?: boolean;
    green?: boolean;
  }>();
</script>

<template>
  <span
    class="font-bold text-[0.8rem] rounded flex px-[6px] py-[2px] w-fit bg-blue-100 text-blue-600"
    :class="` ${gray ? 'text-gray-500 bg-gray-200/70' : ''} ${
      green ? 'text-green-600 bg-green-100' : ''
    } ${purple ? 'text-purple-600 bg-purple-100' : ''}`"
  >
    <slot></slot>
  </span>
</template>
