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
      <StoryBoardList :stories="todoStories" create-row-hidden title="To Do" kanban-style />
    </li>
    <li id="progress">
      <StoryBoardList
        :stories="inProgressStories"
        create-row-hidden
        title="In Progress"
        kanban-style
      />
    </li>
    <li id="done">
      <StoryBoardList :stories="doneStories" create-row-hidden title="Done" kanban-style />
    </li>
  </ul>
</template>
