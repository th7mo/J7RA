<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  defineProps<Props>();
</script>

<template>
  <ul>
    <p>{{ story.progress }}</p>
    <BaseDropdown color="#2563EB" class="dropdown"/>
  </ul>
</template>

<style scoped lang="scss">
  ul {
    @apply flex items-center font-bold bg-blue-200 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem];
  }

  .dropdown {
    @apply text-red-500;
  }
</style>
