<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();
  const stories = computed(() => {
    return store.getStories;
  });

  onMounted(() => {
    store.fetchStories();
  });
</script>

<template>
  <main class="board">
    <StoryBoardList :stories="stories" />
  </main>
</template>

<style scoped lang="scss">
  .board {
    @apply max-w-4xl;
  }
</style>
