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
</script>

<template>
  <ul class="max-w-4xl grid grid-cols-3 gap-4">
    <li id="todo">
      <StoryBoardList :stories="todoStories" title="To Do" kanban />
    </li>
    <li id="progress">
      <StoryBoardList :stories="inProgressStories" title="In Progress" kanban />
    </li>
    <li id="done">
      <StoryBoardList :stories="doneStories" title="Done" kanban />
    </li>
  </ul>
</template>
