<script setup lang="ts">
  defineProps<{
    labelText: string;
    required?: boolean;
  }>();
</script>

<template>
  <p class="text-sm text-gray-600 pl-0.5">
    {{ labelText }} <span class="text-red-600 font-bold" v-if="required">*</span>
  </p>
  <slot></slot>
</template>
