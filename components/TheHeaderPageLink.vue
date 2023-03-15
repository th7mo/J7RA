<script setup lang="ts">
  defineProps<{
    to: string;
  }>();
</script>

<template>
  <li class="h-full">
    <NuxtLink
      :to="`/${to}`"
      class="flex items-center justify-center h-full border-y-[3px] border-transparent px-1"
      >{{ to[0].toUpperCase() + to.slice(1) }}
    </NuxtLink>
  </li>
</template>

<style scoped lang="scss">
  .router-link-active {
    @apply border-b-blue-600 text-blue-600;
  }
</style>
