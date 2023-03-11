<script setup lang="ts">
  interface Props {
    id: number;
    summary: string;
  }

  const props = defineProps<Props>();

  const displayKey = computed(() => {
    return `STORY-${props.id}`;
  });
</script>

<template>
  <ul class="list-item">
    <li class="key">{{ displayKey }}</li>
    <li>{{ summary }}</li>
  </ul>
</template>

<style scoped lang="scss">
  ul.list-item {
    @apply text-sm flex border-gray-300 border p-2 gap-4 shadow rounded bg-white;
  }

  li.key {
    @apply text-gray-600;
  }
</style>
