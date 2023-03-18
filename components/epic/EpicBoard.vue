<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  const storyStore = useStoryStore();
  const selectedEpics = ref([] as number[]);

  const stories = computed(() => {
    return storyStore.getStoriesOfEpics(selectedEpics.value);
  });
</script>

<template>
  <ul class="grid md:grid-cols-2 gap-4">
    <li><EpicList v-model="selectedEpics" /></li>
    <li v-if="stories.length"><StoryList :stories="stories" kanban /></li>
    <li v-else class="test">
      <BaseList class="grid place-items-center">
        <p class="font-thin text-gray-400 text-sm italic">
          Select one or more Epic's to see their Stories
        </p>
      </BaseList>
    </li>
  </ul>
</template>
