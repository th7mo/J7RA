<script setup lang="ts">
  import { UserStory } from '~~/composables/useStoriesService';

  interface Props {
    story: UserStory;
  }
  const props = defineProps<Props>();

  const storyStore = useStoryStore();

  function showStoryOverview() {
    storyStore.setCurrentStory(props.story);
    storyStore.setIsEditingStory(true);
  }

  function deleteCurrentStory() {
    storyStore.deleteStory(props.story.key);
  }
</script>

<template>
  <BaseOptionsList>
    <ul>
      <li @mousedown.left="showStoryOverview">Edit</li>
      <li @mousedown.left="deleteCurrentStory">Delete</li>
    </ul>
  </BaseOptionsList>
</template>

<style scoped lang="scss">
  ul {
    @apply py-1;
  }

  li {
    @apply px-4 py-2 text-sm;

    &:hover {
      @apply bg-gray-200 cursor-pointer;
    }
  }
</style>
