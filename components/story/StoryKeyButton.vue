<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  const props = defineProps<{
    story: UserStory;
  }>();

  const storyStore = useStoryStore();

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }
</script>

<template>
  <p
    class="text-gray-700 hover:cursor-pointer max-w-fit rounded hover:bg-gray-100 justify-start font-bold text-[0.77rem]"
    :class="story.progress === 'Done' ? 'line-through' : ''"
    @click="showStoryOverview"
  >
    STORY-{{ story.key }}
  </p>
</template>
