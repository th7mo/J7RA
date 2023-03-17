<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();

  const todoStories = computed(() => {
    return store.getTodoStories();
  });
</script>

<template>
  <ul class="grid grid-cols-2 gap-4">
    <li><EpicList /></li>
    <li><StoryList :stories="todoStories" kanban /></li>
  </ul>
</template>
