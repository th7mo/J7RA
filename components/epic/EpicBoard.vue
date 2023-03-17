<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const store = useStoryStore();

  const todoStories = computed(() => {
    return store.getTodoStories();
  });
</script>

<template>
  <ul class="grid grid-cols-3 gap-4">
    <li><EpicList /></li>
    <li class="col-span-2"><StoryBoardList :stories="todoStories" kanban /></li>
  </ul>
</template>
