<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const storyStore = useStoryStore();
  const selectedEpics = ref([] as number[]);

  const stories = computed(() => {
    return storyStore.getStoriesOfEpics(selectedEpics.value);
  });
</script>

<template>
  <ul class="grid grid-cols-2 gap-4">
    <li><EpicList v-model="selectedEpics" /></li>
    <li><StoryList :stories="stories" kanban /></li>
  </ul>
</template>
