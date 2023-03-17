<script setup lang="ts">
  import { useStoryStore } from '@/composables/useStories';
  import { UserStory } from '~~/composables/useStoriesService';
  const storyStore = useStoryStore();
  const selectedEpics = ref([] as number[]);

  const stories = computed(() => {
    const storyList: UserStory[] = [];
    for (const story of storyStore.getStories) {
      if (story.epic && selectedEpics.value.includes(story.epic)) {
        storyList.push(story);
      }
    }

    return storyList;
  });
</script>

<template>
  <ul class="grid grid-cols-2 gap-4">
    <li><EpicList v-model="selectedEpics" /></li>
    <li><StoryList :stories="stories" kanban /></li>
  </ul>
</template>
