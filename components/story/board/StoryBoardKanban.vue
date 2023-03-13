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
  <ul class="board">
    <li><StoryBoardList :stories="stories" create-row-hidden title="To Do" kanban-style /></li>
    <li>
      <StoryBoardList :stories="stories" create-row-hidden title="In Progress" kanban-style />
    </li>
    <li><StoryBoardList :stories="stories" create-row-hidden title="Done" kanban-style /></li>
  </ul>
</template>

<style scoped lang="scss">
  .board {
    @apply max-w-4xl flex flex-grow gap-4;
  }
</style>
