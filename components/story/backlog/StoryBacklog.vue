<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();
</script>

<template>
  <StoryList :stories="store.getStories" create-row />
</template>
