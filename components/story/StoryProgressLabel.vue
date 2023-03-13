<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }

  defineProps<Props>();
</script>

<template>
  <p>{{ story.progress }}</p>
</template>

<style scoped lang="scss">
  p {
    @apply font-bold bg-blue-200 text-blue-600 px-2 py-[0.05rem] rounded text-[0.8rem];
  }
</style>
