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
  <ul class="max-w-4xl grid md:grid-cols-3 gap-4">
    <li id="todo">
      <StoryList :stories="todoStories" title="To Do" kanban create-row />
    </li>
    <li id="progress">
      <StoryList :stories="inProgressStories" title="In Progress" kanban create-row />
    </li>
    <li id="done">
      <StoryList :stories="doneStories" title="Done" kanban create-row />
    </li>
  </ul>
</template>
