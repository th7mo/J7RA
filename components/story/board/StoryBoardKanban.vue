<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();
  const todoStories = computed(() => {
    return store.getTodoStories();
  });

  const inProgressStories = computed(() => {
    return store.getInProgressStories();
  });

  const doneStories = computed(() => {
    return store.getDoneStories();
  });

  onMounted(() => {
    store.fetchStories();
  });
</script>

<template>
  <ul class="board">
    <li><StoryBoardList :stories="todoStories" create-row-hidden title="To Do" kanban-style /></li>
    <li>
      <StoryBoardList
        :stories="inProgressStories"
        create-row-hidden
        title="In Progress"
        kanban-style
      />
    </li>
    <li><StoryBoardList :stories="doneStories" create-row-hidden title="Done" kanban-style /></li>
  </ul>
</template>

<style scoped lang="scss">
  .board {
    @apply max-w-4xl grid grid-cols-3 gap-4;
  }
</style>
