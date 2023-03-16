<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();
</script>

<template>
  <StoryBoardList :stories="store.getStories" create-row-hidden />
</template>
